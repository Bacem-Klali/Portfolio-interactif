import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/projectcard.css';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <div className="meta">
        <h3>{project.title}</h3>
        <p className="short">{project.short}</p>
        <Link to={`/project/${project.id}`} className="view-link">Afficher les details</Link>
      </div>
    </div>
  );
};

export default ProjectCard;
