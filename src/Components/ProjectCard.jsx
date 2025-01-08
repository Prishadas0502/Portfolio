  import React from 'react';
  import './ProjectCard.css';
  
  const ProjectCard = ({ title, description, image, link }) => {
    return (
      <div className="project-card">
        <img src={image} alt={title} className="project-image" />
        <h2>{title}</h2>
        <p>{description}</p>
        <a href={link} className="project-link" target="_blank" rel="noopener noreferrer">
          Link
        </a>
      </div>
    );
  };
  
  export default ProjectCard;
