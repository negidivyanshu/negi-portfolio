import React from "react";
import './index.css';

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio built with React showcasing my work and skills.",
    repo: "https://github.com/yourusername/portfolio"
  },
  {
    title: "Weather App",
    description: "A weather forecast app using OpenWeatherMap API and React.",
    repo: "https://github.com/yourusername/weather-app"
  },
  {
    title: "Task Manager",
    description: "A simple task manager with CRUD features built in Node.js and Express.",
    repo: "https://github.com/yourusername/task-manager"
  },
  {
    title: "Blog Platform",
    description: "A full-stack blog platform with authentication and Markdown support.",
    repo: "https://github.com/yourusername/blog-platform"
  },
  {
    title: "Chat App",
    description: "A real-time chat application using Socket.io and React.",
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