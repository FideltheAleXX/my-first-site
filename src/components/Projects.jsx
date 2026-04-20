import { motion } from 'framer-motion';
import analogClock from '../assets/analog-clock-proj.png';
import converter from '../assets/converter-proj.png';
import generator from '../assets/generator-proj.png';
import countdown from '../assets/countdown-proj.png';
import reactImg from '../assets/react.png';

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
      title: 'Landing-page for cosmetologist',
      img: reactImg,
      url: 'https://github.com/FideltheAleXX/landing-cosmetolog',
      description: 'Landing page for cosmetologist.',
    },
    {
      title: 'React mp-3 Player',
      img: reactImg,
      url: 'https://github.com/FideltheAleXX/mp3-player-react',
      description: 'MP3 player use React JS.',
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
        {works.map((work, index) => {
          return (
            <div key={index} className="project">
              <p className="project-title">{work.title}</p>
              <a href={work.url}>
                <img
                  className="project-img"
                  src={work.img}
                  alt="project preview"
                />
              </a>
              <div className="project-descr">{work.description}</div>
            </div>
          );
        })}
      </div>
    </motion.section>
  );
};

export default Projects;
