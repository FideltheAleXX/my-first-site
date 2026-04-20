import { motion } from 'framer-motion';
import frontDevImg from '../assets/front-end-dev-photo.jpg';

const Hero = () => {
  return (
    <motion.section
      id="about"
      className="hero-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div>
        <h1 className="hero-title">Hello, I'm Oleksandr Dzygansky</h1>
        <p>Front-end Developer</p>
        <p>I like to create beautiful and functional SPA</p>
        <p>with a focus on user-centered design and accessibility.</p>
      </div>
      <div>
        <img src={frontDevImg} alt="Oleksandr Dzygansky" className="image" />
      </div>
    </motion.section>
  );
};

export default Hero;
