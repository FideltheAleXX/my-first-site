import { useState } from 'react';

const ProjectCard = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="project">
      <p className="project-title">{project.title}</p>
      <a href={project.url}>
        <img className="project-img" src={project.img} alt="project preview" />
      </a>
      <div className={`project-descr ${isExpanded ? 'expanded' : 'clamped'}`}>
        {project.description}
      </div>
      <button
        className="project-btn"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? 'Hide' : 'Read more'}
      </button>
    </div>
  );
};

export default ProjectCard;
