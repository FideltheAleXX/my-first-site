import { motion } from 'framer-motion';
import htmlImg from '../assets/html.png';
import cssImg from '../assets/css.png';
import javascriptImg from '../assets/javascript.png';
import reactImg from '../assets/react.png';
import typescriptImg from '../assets/typescript.png';
import nodejsImg from '../assets/nodejs.png';
import npmImg from '../assets/npm.png';
import expressImg from '../assets/expressjs.png';
import dockerImg from '../assets/docker.png';
import githubImg from '../assets/github.png';
import postgreImg from '../assets/postgresql.png';
import awsImg from '../assets/aws.svg';

const Skills = () => {
  const skills = [
    { img: htmlImg, name: 'HTML' },
    { img: cssImg, name: 'CSS' },
    { img: javascriptImg, name: 'JavaScript' },
    { img: reactImg, name: 'React' },
    { img: typescriptImg, name: 'TypeScript' },
    { img: nodejsImg, name: 'Node.js' },
    { img: npmImg, name: 'npm' },
    { img: expressImg, name: 'Express' },
    { img: dockerImg, name: 'Docker' },
    { img: githubImg, name: 'Git/GitHub' },
    { img: postgreImg, name: 'postgreSQL' },
    { img: awsImg, name: 'AWS' },
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

      <div class="skills-list">
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
