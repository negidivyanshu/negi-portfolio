import React from "react";
import './index.css';

const Skills = () => {
  return (
    <section id="skills" className="">
      <h1 className="header">&lt;skills&gt;</h1>
      <div className="skills-row">
        <div className="skill">
          <i className="devicon-html5-plain colored" title="HTML5"></i>
          <p>HTML5</p>
        </div>
        <div className="skill">
          <i className="devicon-css3-plain colored" title="CSS3"></i>
          <p>CSS3</p>
        </div>
        <div className="skill">
          <i className="devicon-javascript-plain colored" title="JavaScript"></i>
          <p>JavaScript</p>
        </div>
        <div className="skill">
          <i className="devicon-react-original colored" title="React"></i>
          <p>React</p>
        </div>
        <div className="skill">
          <i className="devicon-bootstrap-plain colored" title="Bootstrap"></i>
          <p>Bootstrap</p>
        </div>
        <div className="skill">
          <i className="devicon-git-plain colored" title="Git"></i>
          <p>Git</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;