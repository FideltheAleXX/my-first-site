import { motion } from 'framer-motion';
import converter from '../assets/converter-proj.png';
import generator from '../assets/generator-proj.png';
import countdown from '../assets/countdown-proj.png';
import cosmetologist from '../assets/cosmetologist-proj.png';
import pflImg from '../assets/pfl-proj.png';
import clannZu from '../assets/clann-zu-proj.png';
import localCafe from '../assets/local-cafe-proj.png';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const works = [
    {
      title: 'Clann Zu fan web-site',
      img: clannZu,
      url: 'https://clann-zu.com/',
      description:
        'A fan-site for Clann Zu band with React-frontend part and NodeJS/Express-backend part.',
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
    {
      title: 'Local cafe site',
      img: localCafe,
      url: 'https://djan-cafe-next.vercel.app/',
      description:
        'A fully responsive website on Next JS for a local café, featuring a dynamic menu catalog and an online gift-card create system.',
    },
    {
      title: 'Currency Converter',
      img: converter,
      url: 'https://fidelthealexx.github.io/currency-converte-js/',
      description:
        'A JavaScript-based currency converter demonstrating real-time exchange rate calculations, API integration, and dynamic DOM updates.',
    },
    {
      title: 'Generator the Passwords',
      img: generator,
      url: 'https://fidelthealexx.github.io/generatoe-the-passwords/',
      description:
        'A lightweight JavaScript web application for generating strong, randomized passwords with customizable length and character types.',
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
