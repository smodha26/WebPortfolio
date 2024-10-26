import React from 'react';

const skillsData = {
  "Back-end": ["C#", "Java", "Python", "SQL", "REST API", "MongoDB"],
  "Front-end": ["JavaScript", "HTML", "CSS", "React.js", "jQuery", "Node.js", "Express.js"],
  "Testing": ["JUnit", "Jest", "Selenium"],
  "Scripts and Tools": ["Bash", "Shell"],
  "Data Formats": ["XML", "JSON", "CSV", "UML"],
  "Work Methods": ["Agile", "Scrum", "Kanban"],
  "Deployment": ["CI/CD", "Azure Dev-Ops"],
  "Version Control": ["GitHub", "GitLab", "BitBucket", "Git"],
  "Cloud & Infrastructure": ["AWS", "Docker", "Kubernetes", "Jenkins"],
  "Development Tools": ["VSCode", "IntelliJ", "Oracle SQL Developer", "Synapse"],
  "Testing & Monitoring": ["Postman", "Grafana", "Jenkins"],
  "Business Intelligence": ["PowerBI"],
};

const Skills = () => {
  return (
    <section id="skills" className="section-container">
      <h2 className="section-title">Skills</h2>
      {Object.entries(skillsData).map(([category, skills], index) => (
        <div key={index} className="skills-category">
          <h3 className="skills-category-title">{category}</h3>
          <div className="skills-grid">
            {skills.map((skill, skillIndex) => (
              <div key={skillIndex} className="skill-item">
                {skill}
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Skills;
