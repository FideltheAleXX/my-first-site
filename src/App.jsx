import Menu from './components/Menu';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Skills from './components/Skills';
import './index.css';
import './App.css';

function App() {
  const newLocal = <Hero />;
  return (
    <>
      <Menu />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
