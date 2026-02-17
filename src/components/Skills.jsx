const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-title">
        <h2>Skills</h2>
      </div>
      <div class="skills-list">
        <div class="skill-item">
          <img class="skill-image" alt="HTML logo" src="/src/assets/html.png" />
          <p>HTML</p>
        </div>
        <div class="skill-item">
          <img class="skill-image" alt="CSS logo" src="/src/assets/css.png" />
          <p>CSS</p>
        </div>

        <div class="skill-item">
          <img
            class="skill-image"
            alt="JavaScript logo"
            src="/src/assets/javascript.png"
          />
          <p>JavaScript</p>
        </div>
        <div class="skill-item">
          <img
            class="skill-image"
            alt="React logo"
            src="/src/assets/react.png"
          />
          <p>React</p>
        </div>
        <div class="skill-item">
          <img
            class="skill-image"
            alt="TypeScript logo"
            src="/src/assets/typescript.png"
          />
          <p>TypeScript</p>
        </div>

        <div class="skill-item">
          <img
            class="skill-image"
            alt="Node.js logo"
            src="/src/assets/nodejs.png"
          />
          <p>Node.js</p>
        </div>
        <div class="skill-item">
          <img class="skill-image" alt="npm logo" src="/src/assets/npm.png" />
          <p>npm</p>
        </div>
        <div class="skill-item">
          <img
            class="skill-image"
            alt="Express.js logo"
            src="/src/assets/expressjs.png"
          />
          <p>Express.js</p>
        </div>
        <div class="skill-item">
          <img
            class="skill-image"
            alt="Docker logo"
            src="/src/assets/docker.png"
          />
          <p>Docker</p>
        </div>
        <div class="skill-item">
          <img
            class="skill-image"
            alt="Git/GitHub logo"
            src="/src/assets/github.png"
          />
          <p>Git/GitHub</p>
        </div>
        <div class="skill-item">
          <img
            class="skill-image"
            alt="postgreSQL logo"
            src="/src/assets/postgresql.png"
          />
          <p>postgreSQL</p>
        </div>

        <div class="skill-item">
          <img class="skill-image" alt="AWS logo" src="/src/assets/aws.svg" />
          <p>AWS</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
