export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__divider" />
        <div className="footer__content">
          <p className="footer__copyright">
            &copy; {year} Sydney. Built with React
          </p>
          <p className="footer__tagline">
            &lt;designed &amp; developed with precision /&gt;
          </p>
        </div>
      </div>
    </footer>
  );
}
