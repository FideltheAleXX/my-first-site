import { motion } from 'framer-motion';
import analogClock from '../assets/analog-clock-proj.png';
import converter from '../assets/converter-proj.png';
import generator from '../assets/generator-proj.png';
import countdown from '../assets/countdown-proj.png';
import cosmetologist from '../assets/cosmetologist-proj.png';
import pflImg from '../assets/pfl-proj.png';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const works = [
    {
      title: 'Currency Converter',
      img: converter,
      url: 'https://fidelthealexx.github.io/currency-converte-js/',
      description:
        'A JavaScript-based currency converter demonstrating real-time exchange rate calculations, API integration, and dynamic DOM updates.',
    },
    {
      title: 'Analog Clock JS',
      img: analogClock,
      url: 'https://codepen.io/editor/FideltheAleXX/pen/019da4a0-1f8f-7f6c-9db3-f6d66f0190bd',
      description:
        'A JavaScript-based analog clock demonstrating real-time rendering, DOM updates, and CSS transform usage.',
    },
    {
      title: 'Generator the Passwords',
      img: generator,
      url: 'https://fidelthealexx.github.io/generatoe-the-passwords/',
      description:
        'A lightweight JavaScript web application for generating strong, randomized passwords with customizable length and character types.',
    },
    {
      title: 'Countdown',
      img: countdown,
      url: 'https://fidelthealexx.github.io/new-year-countdown/',
      description:
        'A real-time JavaScript countdown clock designed to holiday events with automatic interval management.',
    },
    {
      title: 'Landing for cosmetologist',
      img: cosmetologist,
      url: 'https://github.com/FideltheAleXX/landing-cosmetolog',
      description:
        'An interactive, high-converting page with custom JavaScript features and modern UI/UX design.',
    },
    {
      title: 'PFL UA start page clone',
      img: pflImg,
      url: 'https://fidelthealexx.github.io/pfl-start-page/',
      description:
        'Migrated the pfl.ua homepage to React, delivering a high-performance, fully responsive web experience.',
    },
  ];
  return (
    <motion.section
      id="projects"
      className="projects-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div>
        <h2 className="projects-title">My Projects</h2>
      </div>
      <div className="works">
        {works.map((work, index) => (
          <ProjectCard key={index} project={work} />
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
