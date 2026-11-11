import { motion } from 'framer-motion';
import javascriptImg from '../assets/javascript.png';
import reactImg from '../assets/react.png';
import nextImg from '../assets/nextjs.png';
import typescriptImg from '../assets/typescript.png';
import nodejsImg from '../assets/nodejs-logo.png';
import expressImg from '../assets/expressjs-logo.png';
import dockerImg from '../assets/docker.png';
import githubImg from '../assets/github.png';
import postgreImg from '../assets/postgresql-logo.png';
import nestImg from '../assets/nestjs-logo.png';
import mongodbImg from '../assets/mongodb-logo.png';
import prismaImg from '../assets/prisma-logo.png';

const Skills = () => {
  const skills = [
    { img: nodejsImg, name: 'Node.js' },
    { img: expressImg, name: 'Express JS' },
    { img: nestImg, name: 'Nest JS' },
    { img: typescriptImg, name: 'TypeScript' },
    { img: postgreImg, name: 'PostgreSQL' },
    { img: mongodbImg, name: 'MongoDB' },
    { img: dockerImg, name: 'Docker' },
    { img: githubImg, name: 'Git/GitHub' },
    { img: prismaImg, name: 'Prisma ORM' },
    { img: javascriptImg, name: 'JavaScript' },
    { img: reactImg, name: 'React' },
    { img: nextImg, name: 'Nest JS' },
  ];
  return (
    <motion.section
      id="skills"
      className="skills-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="skills-title">
        <h2>Skills</h2>
      </div>

      <div className="skills-list">
        {skills.map((skill, index) => {
          return (
            <div key={index} className="skill-item">
              <img className="skill-image" src={skill.img} alt="skill logo" />
              <p className="skill-title">{skill.name}</p>
            </div>
          );
        })}
      </div>
    </motion.section>
  );
};

export default Skills;
