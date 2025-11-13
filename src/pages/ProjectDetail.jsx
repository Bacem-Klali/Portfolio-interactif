import React from 'react';
import { useParams, Link } from 'react-router-dom';
import projects from '../data/projects';
import '../styles/projectdetail.css';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div>
        <h2>Project not found</h2>
        <Link to="/projects">Back</Link>
      </div>
    );
  }

  return (
    <div className="project-detail">
      <h2>{project.title}</h2>
      <p className="short">{project.short}</p>

      <h3>Description</h3>
      <p>{project.description}</p>

      <h3>Technologies</h3>
      <ul>
        {project.technologies.map((t, idx) => <li key={idx}>{t}</li>)}
      </ul>

      <Link to="/projects" className="back-link">Retour aux projets</Link>
    </div>
  );
};

export default ProjectDetail;
