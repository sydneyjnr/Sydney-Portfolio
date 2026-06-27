import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import './App.css';
import './components/Navbar.css';
import './components/Hero.css';
import './components/Skills.css';
import './components/Projects.css';
import './components/Experience.css';
import './components/Contact.css';
import './components/Footer.css';
import './components/ScrollToTop.css';

function App() {
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
