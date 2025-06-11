import React from "react";
import company from './salesqueen-company-logo.png'
import bharat from './bharat.webp'
import './index.css'

const Experience = () => {
  return (
    <section id="experience">
      <h1 className="header">&lt;experience&gt;</h1>
  <div className="text-start">
<div className="d-flex flex-wrap align-items-center">
  <div className="flex-grow-1">
    <h3 className="mb-4">
    <a href="https://salesqueen.org/" target="_blank" rel="noopener noreferrer">
  <span>Salesqueen Software Solutions</span>
</a>
    </h3>
  </div>
  <div>
    <img src={company} alt="Personal Logo" className="company-logo mb-4 bg-secondary" />
  </div>
</div>
    <h4>Front-end Developer Intern</h4>
    <p>| Jun 2023 – Sep 2023 (Remote) </p>
    
     <ul className="ulpc" style={{ listStyleType: "none", paddingLeft: 0 }}>
  <li>
    <p>
      <span style={{ color: "#01C38D", marginRight: "8px" }}>➤</span>
      Developed and maintained responsive user interfaces using HTML5, CSS3, JavaScript, and Bootstrap, ensuring seamless experiences across devices and browsers.
    </p>
  </li>
  <li>
    <p>
      <span style={{ color: "#01C38D", marginRight: "8px" }}>➤</span>
      Collaborated closely with the QA team to identify, troubleshoot, and resolve UI/UX issues, significantly improving application usability and performance.
    </p>
  </li>
  <li>
    <p>
      <span style={{ color: "#01C38D", marginRight: "8px" }}>➤</span>
      Participated in daily stand-ups and sprint planning meetings, contributing ideas and feedback to drive continuous improvement within the development team.
    </p>
  </li>
</ul>
<ul className="ulmobile" style={{ listStyleType: "none", paddingLeft: 0 }}>
  <li>
    <p>
      <span style={{ color: "#01C38D", marginRight: "8px" }}>➤</span>
      Built and maintained responsive user interfaces with HTML5, CSS3, JavaScript, and Bootstrap for cross-device compatibility.
    </p>
  </li>
  <li>
    <p>
      <span style={{ color: "#01C38D", marginRight: "8px" }}>➤</span>
      Collaborated with QA to resolve UI/UX issues and improve usability.
    </p>
  </li>
  <li>
    <p>
      <span style={{ color: "#01C38D", marginRight: "8px" }}>➤</span>
      Integrated modern web tools and frameworks to enhance project outcomes.
    </p>
  </li>
</ul>  
  </div>
  <div className="text-start mt-5">
    <div className="d-flex flex-wrap align-items-center">
      <div className="flex-grow-1">
        <h3 className="mb-4">
          <a href="https://www.bharatbhramann.com/" target="_blank" rel="noopener noreferrer">
            <span>Bharatbhramann</span>
          </a>
        </h3>
      </div>
      <div>
        <img src={bharat} alt="Personal Logo" className="bharat-logo mb-4" />
      </div>
    </div>
    <h4>Front-end Developer (Freelance)</h4>
    <p>| Jun 2023 – Sep 2023 (Remote)</p>

    <ul className="ulpc" style={{ listStyleType: "none", paddingLeft: 0 }}>
      <li>
        <p>
          <span style={{ color: "#01C38D", marginRight: "8px" }}>➤</span>
          Collaborated with a friend to design and develop the Bharatbhramann website as a freelance project, focusing on a clean and engaging user interface.
        </p>
      </li>
      <li>
        <p>
          <span style={{ color: "#01C38D", marginRight: "8px" }}>➤</span>
          Built responsive layouts using React, HTML5, CSS3, and Bootstrap to ensure optimal performance across devices.
        </p>
      </li>
      <li>
        <p>
          <span style={{ color: "#01C38D", marginRight: "8px" }}>➤</span>
          Managed feature planning, bug fixes, and continuous improvements through effective teamwork and feedback.
        </p>
      </li>
    </ul>
    <ul className="ulmobile" style={{ listStyleType: "none", paddingLeft: 0 }}>
      <li>
        <p>
          <span style={{ color: "#01C38D", marginRight: "8px" }}>➤</span>
          Designed and launched the Bharatbhramann website as a freelance project with a friend.
        </p>
      </li>
      <li>
        <p>
          <span style={{ color: "#01C38D", marginRight: "8px" }}>➤</span>
          Used React and Bootstrap for a smooth, responsive experience on all devices.
        </p>
      </li>
      <li>
        <p>
          <span style={{ color: "#01C38D", marginRight: "8px" }}>➤</span>
          Worked together on new features and improvements throughout the project.
        </p>
      </li>
    </ul>
  </div>
    </section>
  );
};

export default Experience;