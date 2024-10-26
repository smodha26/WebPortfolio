import React, { useState } from 'react';

function Projects() {
  const [showPopup, setShowPopup] = useState(null);

  const projects = [
    {
      title: "Project 1",
      image: "/images/project1.png",
      technologies: "React, Node.js, MongoDB",
      description: "Description complète du projet 1",
      link: "https://horaire-boucherville.vercel.app/"
    },
    // Ajouter les autres projets ici
  ];

  return (
    <section id="projects" className="projects-section">
      <h2>Personal Projects</h2>
      <div className="project-list">
        {projects.map((proj, index) => (
          <div key={index} className="project-box" onClick={() => setShowPopup(index)}>
            <img src={proj.image} alt={proj.title} />
            <h3>{proj.title}</h3>
            <p style={{ color: 'red' }}>{proj.technologies}</p>
          </div>
        ))}
      </div>
      {showPopup !== null && (
        <div className="popup">
          <button onClick={() => setShowPopup(null)}>X</button>
          <h3>{projects[showPopup].title}</h3>
          <p>{projects[showPopup].description}</p>
          <a href={projects[showPopup].link} target="_blank" rel="noopener noreferrer">Link of the website</a>
        </div>
      )}
    </section>
  );
}

export default Projects;
