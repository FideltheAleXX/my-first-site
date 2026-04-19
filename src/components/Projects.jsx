import { motion } from 'framer-motion';
import analogClock from '../assets/analog-clock-proj.png';

const Projects = () => {
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
        <div className="project">
          <p className="project-title">Analog Clock JS</p>
          <a href="https://codepen.io/editor/FideltheAleXX/pen/019da4a0-1f8f-7f6c-9db3-f6d66f0190bd">
            <img
              className="project-img"
              src={analogClock}
              alt="analog clock JS preview"
            />
          </a>
        </div>
        <div className="mpplayer">MP3-player</div>
      </div>
    </motion.section>
  );
};

export default Projects;
