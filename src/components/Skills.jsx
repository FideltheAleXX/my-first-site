import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    { img: '/src/assets/html.png', name: 'HTML' },
    { img: '/src/assets/css.png', name: 'CSS' },
    { img: '/src/assets/javascript.png', name: 'JavaScript' },
    { img: '/src/assets/react.png', name: 'React' },
    { img: '/src/assets/typescript.png', name: 'TypeScript' },
    { img: '/src/assets/nodejs.png', name: 'Node.js' },
    { img: '/src/assets/npm.png', name: 'npm' },
    { img: '/src/assets/expressjs.png', name: 'Express' },
    { img: '/src/assets/docker.png', name: 'Docker' },
    { img: '/src/assets/github.png', name: 'Git/GitHub' },
    { img: '/src/assets/postgresql.png', name: 'postgreSQL' },
    { img: '/src/assets/aws.svg', name: 'AWS' },
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
