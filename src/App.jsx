import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import './App.css';
import './components/GridBackground.css';
import './components/Navbar.css';
import './components/Hero.css';
import './components/Skills.css';
import './components/Projects.css';
import './components/Experience.css';
import './components/Contact.css';
import './components/Footer.css';
import './components/ScrollToTop.css';

// Fades each [data-reveal] block up once as it arrives. Everything stays visible
// by default, so nothing depends on this running.
function useRevealOnScroll() {
  useEffect(() => {
    if (
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      !('IntersectionObserver' in window)
    ) {
      return undefined;
    }

    const blocks = document.querySelectorAll('[data-reveal]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.dataset.reveal = 'done';
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: '0px 0px -8% 0px' },
    );

    blocks.forEach((block) => {
      block.dataset.reveal = 'pending';
      observer.observe(block);
    });

    return () => {
      observer.disconnect();
      blocks.forEach((block) => {
        block.dataset.reveal = '';
      });
    };
  }, []);
}

function App() {
  useRevealOnScroll();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
