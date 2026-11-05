import { useEffect, useRef } from 'react';

const PEAK_ALPHA = 0.18;
const FADE_IN_MS = 120;
const FADE_OUT_MS = 1000;
const MAX_LIT_CELLS = 40;
const MAX_DPR = 2;

/**
 * The gold grid behind the hero. It fills its parent, which also supplies the
 * pointer events. The lines are plain CSS; the canvas only paints the cells lit
 * by the pointer, and its animation loop runs only while a cell is fading, so an
 * idle page does no per-frame work.
 */
export default function GridBackground() {
  const layerRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const layer = layerRef.current;
    const host = layer.parentElement;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return undefined;

    const styles = getComputedStyle(layer);
    const cells = new Map();
    let cellSize = 40;
    let currentKey = null;
    let frameId = null;
    let lastTime = 0;

    const clearCell = (cell) => {
      ctx.clearRect(cell.col * cellSize, cell.row * cellSize, cellSize, cellSize);
    };

    const tick = (time) => {
      // A frame's timestamp can predate the performance.now() that started the loop.
      const elapsed = Math.min(Math.max(time - lastTime, 0), 100);
      lastTime = time;
      let animating = false;

      cells.forEach((cell, key) => {
        // A cell always finishes fading in, so quick taps and fast mouse moves
        // still leave a visible trail. It then holds while the pointer stays on it.
        if (cell.rising) {
          cell.alpha = Math.min(PEAK_ALPHA, cell.alpha + (PEAK_ALPHA * elapsed) / FADE_IN_MS);
          cell.rising = cell.alpha < PEAK_ALPHA;
        } else if (key === currentKey) {
          return;
        } else {
          cell.alpha = Math.max(0, cell.alpha - (PEAK_ALPHA * elapsed) / FADE_OUT_MS);
        }

        clearCell(cell);
        if (!cell.rising && cell.alpha === 0) {
          cells.delete(key);
          return;
        }

        // Inset by the 1px grid line so lit cells never paint over the lines.
        ctx.globalAlpha = cell.alpha;
        ctx.fillRect(
          cell.col * cellSize + 1,
          cell.row * cellSize + 1,
          cellSize - 1,
          cellSize - 1,
        );
        animating = true;
      });

      frameId = animating ? requestAnimationFrame(tick) : null;
    };

    const startLoop = () => {
      if (frameId !== null) return;
      lastTime = performance.now();
      frameId = requestAnimationFrame(tick);
    };

    const evictOldestCell = () => {
      for (const [key, cell] of cells) {
        if (key !== currentKey) {
          clearCell(cell);
          cells.delete(key);
          return;
        }
      }
    };

    const lightCellAt = (x, y) => {
      const col = Math.floor(x / cellSize);
      const row = Math.floor(y / cellSize);
      const key = `${col}:${row}`;
      if (key === currentKey) return;

      currentKey = key;
      const cell = cells.get(key);
      if (cell) {
        cell.rising = true;
      } else {
        cells.set(key, { col, row, alpha: 0, rising: true });
        if (cells.size > MAX_LIT_CELLS) evictOldestCell();
      }
      startLoop();
    };

    const releaseCell = () => {
      if (currentKey === null) return;
      currentKey = null;
      startLoop();
    };

    const resetCanvas = () => {
      cells.clear();
      currentKey = null;

      const dpr = Math.min(window.devicePixelRatio || 1, MAX_DPR);
      canvas.width = Math.round(canvas.clientWidth * dpr);
      canvas.height = Math.round(canvas.clientHeight * dpr);
      // Changing the canvas size resets its state, so restore it here.
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.fillStyle = styles.getPropertyValue('--gold-rich').trim();
      cellSize = parseFloat(styles.getPropertyValue('--grid-cell')) || cellSize;
    };

    // The grid scrolls with the page, so measure from where it is right now.
    const handlePointer = (event) => {
      const { left, top } = canvas.getBoundingClientRect();
      lightCellAt(event.clientX - left, event.clientY - top);
    };

    // A finger leaves no hover state behind, so its cell fades as soon as it lifts.
    const handlePointerUp = (event) => {
      if (event.pointerType !== 'mouse') releaseCell();
    };

    const resizeObserver = new ResizeObserver(resetCanvas);
    const pointerOptions = { passive: true };
    let enabled = false;

    const enable = () => {
      if (enabled) return;
      enabled = true;
      resizeObserver.observe(canvas);
      host.addEventListener('pointermove', handlePointer, pointerOptions);
      host.addEventListener('pointerdown', handlePointer, pointerOptions);
      host.addEventListener('pointerup', handlePointerUp, pointerOptions);
      host.addEventListener('pointercancel', releaseCell, pointerOptions);
      host.addEventListener('pointerleave', releaseCell, pointerOptions);
      window.addEventListener('blur', releaseCell);
    };

    const disable = () => {
      if (!enabled) return;
      enabled = false;
      resizeObserver.disconnect();
      host.removeEventListener('pointermove', handlePointer);
      host.removeEventListener('pointerdown', handlePointer);
      host.removeEventListener('pointerup', handlePointerUp);
      host.removeEventListener('pointercancel', releaseCell);
      host.removeEventListener('pointerleave', releaseCell);
      window.removeEventListener('blur', releaseCell);

      if (frameId !== null) cancelAnimationFrame(frameId);
      frameId = null;
      cells.clear();
      currentKey = null;
      ctx.save();
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.restore();
    };

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const syncMotionPreference = () => {
      if (reducedMotion.matches) disable();
      else enable();
    };

    syncMotionPreference();
    reducedMotion.addEventListener('change', syncMotionPreference);

    return () => {
      reducedMotion.removeEventListener('change', syncMotionPreference);
      disable();
    };
  }, []);

  return (
    <div ref={layerRef} className="grid-bg" aria-hidden="true">
      <div className="grid-bg__lines" />
      <canvas ref={canvasRef} className="grid-bg__cells" />
    </div>
  );
}
