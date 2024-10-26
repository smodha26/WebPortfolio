import React from 'react';

function Experience() {
  const experiences = [
    {
      title: "National Bank of Canada",
      job: "Software developer",
      date: "21/08/23 - 22/12/23",
      description: [
        "Modified endpoints across all microservices to integrate new APIs, improving overall architecture and ensuring functionality through JUnit testing.",
        "Developed a REST API service for creating, updating, and retrieving contacts by ID, enhancing operational efficiency within the microservices framework.",
        "Collaborated effectively using Git, Bitbucket, and Jenkins for version control and continuous integration.",
        "Implemented Cucumber tests with Data Tables to validate REST services and ensure comprehensive coverage of business rules.",
        "Worked with CI/CD pipelines using Jenkins to streamline deployment processes and improve development workflow."
      ]
    },
    {
      title: "Centris",
      job: "Software analyst",
      date: "02/05/22 - 05/05/23",
      description: [
        "Resolved bugs in Jira using C#, enhancing product stability and user experience.",
        "Automated tests with Selenium, significantly improving product quality and testing efficiency.",
        "Developed tests in C# to verify product functionality and ensure robustness.",
        "Identified and resolved testing issues using TestRail for effective tracking and management."
      ]
    },
    {
      title: "Summit Tech",
      job: "QA analyst",
      date: "03/05/21 - 29/04/22",
      description: [
        "Participated in the validation of new features for websites (Rossy, 1st Avenue) and applications (M++, AT&T, Nezumi), ensuring quality and functionality before release.",
        "Captured bug logs and documented them in Jira, facilitating clear communication with developers for timely resolution.",
        "Utilized performance testing tools to assess application scalability and responsiveness under varying load conditions.",
        "Implemented test automation frameworks, reducing manual testing efforts and increasing test coverage."
      ]
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <h2>Work Experience</h2>
      {experiences.map((exp, index) => (
        <div key={index} className="experience-item">
          <h3>{exp.title}</h3>
          <p>{exp.job}</p>
          <p>{exp.date}</p>
          <ul>
            {exp.description.map((point, i) => <li key={i}>{point}</li>)}
          </ul>
        </div>
      ))}
    </section>
  );
}

export default Experience;
