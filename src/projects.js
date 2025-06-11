import React from "react";
import './index.css';

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio built with React showcasing my work and skills.",
    repo: "https://github.com/negidivyanshu/negi-portfolio.git"
  },
  {
    title: "Blog it",
    description: "Dynamic blogging platform with post creation, editing, and deletion. Data persistence via localStorage and clean, modular JavaScript structure.",
    repo: "https://negidivyanshu.github.io/Blog-App/"
  },
  {
    title: "Bharat Bhramann",
    description: "A travel agency website made for a client, with features such as payment gateway, blogs fetching etc.",
    repo: "https://www.bharatbhramann.com/"
  },
  {
    title: "Voting Platform",
    description: "An online voting platform with secure authentication, real-time vote updates, and admin dashboard for managing polls and results.",
    repo: "https://negidivyanshu.github.io/voting-platform"
  },
   {
    title: "Weather App",
    description: "A weather forecast app using OpenWeatherMap API and React.",
    repo: "https://github.com/negidivyanshu/weather-app.git"
  }
];

const Projects = () => {
  return (
    <section id="projects">
      <h1 className="header">&lt;projects&gt;</h1>
      <div className="projects-container">
        {projects.map((project, idx) => (
          <div className="project-card" key={idx}>
            ...
            <div className="project-card-header mb-2">
              <i className="far fa-folder" aria-hidden="true" style={{ marginRight: "10px", color: "#01C38D" }}></i>
              <h2>{project.title}</h2>
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="github-link"
                title="View on GitHub"
              >
                <i className="fab fa-github" aria-hidden="true"></i>
              </a>
            </div>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;