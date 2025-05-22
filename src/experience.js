import React from "react";
import company from './salesqueen-company-logo.png'
import './index.css'

const Experience = () => {
  return (
    <section id="experience">
      <h1 className="header">&lt;experience&gt;</h1>
  <div className="text-start">
<div className="d-flex flex-wrap align-items-center">
  <div className="flex-grow-1">
    <h3 className="mb-4">
      <span>Salesqueen Software Solutions</span>
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
      Utilized Git for efficient version control and team collaboration, managing feature branches, resolving merge conflicts, and participating in code reviews.
    </p>
  </li>
  <li>
    <p>
      <span style={{ color: "#01C38D", marginRight: "8px" }}>➤</span>
      Stayed up-to-date with modern web development trends and best practices, proactively integrating new tools and frameworks to enhance project outcomes.
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
      Used Git for version control, code reviews, and team collaboration.
    </p>
  </li>
  <li>
    <p>
      <span style={{ color: "#01C38D", marginRight: "8px" }}>➤</span>
      Integrated modern web tools and frameworks to enhance project outcomes.
    </p>
  </li>
  <li>
    <p>
      <span style={{ color: "#01C38D", marginRight: "8px" }}>➤</span>
      Contributed ideas in daily stand-ups and sprint planning meetings.
    </p>
  </li>
</ul>
   
  </div>
    </section>
  );
};

export default Experience;