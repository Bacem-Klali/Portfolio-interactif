import React, { useState } from 'react';
import projects from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import '../styles/projects.css';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');


  const categories = ['all', 'React', 'JavaScript', 'Flutter', 'Python'];


  const filteredProjects =
    selectedCategory === 'all'
      ? projects
      : projects.filter(p => p.category === selectedCategory);

  return (
    <div className="projects-page">
      <h2>Projets</h2>

      <div className="filter-container">
        <label htmlFor="categoryFilter">Filtrer par catégorie :</label>
        <select
          id="categoryFilter"
          value={selectedCategory}
          onChange={e => setSelectedCategory(e.target.value)}
        >
          {categories.map(cat => (
            <option key={cat} value={cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </option>
          ))}
        </select>
      </div>

      <div className="projects-list">
        {filteredProjects.map(p => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
