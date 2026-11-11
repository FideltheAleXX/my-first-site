import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import clannZu from '../assets/clann-zu-proj.png';
import fantasyFootballImg from '../assets/fantasy-football-proj.png';
import biathlonImg from '../assets/biathlon-proj.png';
import localCafe from '../assets/local-cafe-proj.png';
import cosmetologist from '../assets/cosmetologist-proj.png';
import converter from '../assets/converter-proj.png';

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
      title: 'Fantasy Football PFL First League Ukraine',
      img: fantasyFootballImg,
      url: 'https://github.com/FideltheAleXX/fantasy-pfl-backend',
      description:
        'A production-ready NestJS backend for a Fantasy Football platform, designed with modular architecture, strict TypeScript typings, and high-performance database queries.',
    },
    {
      title: 'Biathlon calendar',
      img: biathlonImg,
      url: 'https://github.com/FideltheAleXX/biathlon-backend',
      description:
        'A robust RESTful backend API designed to serve real-time schedule data, stage groupings, and athlete standings for biathlon competitions. Built using NestJS and modern server-side practices, it provides decoupled architecture, structured data endpoints, and automated tests to ensure high reliability during peak live event loads.',
    },
    {
      title: 'Local cafe site',
      img: localCafe,
      url: 'https://djan-cafe-next.vercel.app/',
      description:
        'A fully responsive website on Next JS for a local café, featuring a dynamic menu catalog and an online gift-card create system.',
    },
    {
      title: 'Landing for cosmetologist',
      img: cosmetologist,
      url: 'https://fidelthealexx.github.io/landing-cosmetolog/',
      description:
        'An interactive, high-converting page with custom JavaScript features and modern UI/UX design.',
    },

    {
      title: 'Currency Converter',
      img: converter,
      url: 'https://fidelthealexx.github.io/currency-converte-js/',
      description:
        'A JavaScript-based currency converter demonstrating real-time exchange rate calculations, API integration, and dynamic DOM updates.',
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
