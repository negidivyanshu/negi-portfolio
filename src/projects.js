import React from "react";
import './index.css';

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio built with React showcasing my work and skills.",
    repo: "https://github.com/negidivyanshu/negi-portfolio.git"
  },
  {
    title: "Weather App",
    description: "A weather forecast app using OpenWeatherMap API and React.",
    repo: "https://weather-app-xi-steel-70.vercel.app/"
  },
  {
    title: "Travel Agency",
    description: "A quick travel agency website made for a client, with features such as payment gateway, blogs fetching etc.",
    repo: "https://github.com/yourusername/task-manager"
  },
  {
    title: "Voting Platform",
    description: "An online voting platform with secure authentication, real-time vote updates, and admin dashboard for managing polls and results.",
    repo: "https://github.com/yourusername/voting-platform"
  },
  {
    title: "Notes App",
    description: "A notes application built with React for creating, editing, and organizing notes in real time. Features include live collaboration and instant updates using Socket.io.",
    repo: "https://github.com/yourusername/chat-app"
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
            <div className="project-card-header">
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
