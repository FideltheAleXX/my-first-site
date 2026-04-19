import { motion } from 'framer-motion';
import analogClock from '../assets/analog-clock-proj.png';
import converter from '../assets/converter-proj.png';

const Projects = () => {
  const works = [
    {
      title: 'Analog Clock JS',
      img: analogClock,
      url: 'https://codepen.io/editor/FideltheAleXX/pen/019da4a0-1f8f-7f6c-9db3-f6d66f0190bd',
      description:
        'A JavaScript-based analog clock demonstrating real-time rendering, DOM updates, and CSS transform usage.',
    },
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
