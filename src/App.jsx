import Menu from './components/Menu';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Skills from './components/Skills';
import './index.css';
import './App.css';

function App() {
  return (
    <>
      <Menu />
      <div className="container">
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;
