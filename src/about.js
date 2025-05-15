import React from "react";
import pic from './logo.jpg';
import './index.css'

const About = () => {
  return (
    <section id="about" className="mt-4 d-flex align-items-center justify-content-center">
      <div className="about-content text-left">
        <h1 className="header">&lt;about me&gt;</h1>
       <p> I'm a <span>Software Developer</span> currently pursuing a B.Sc. (Hons) in Computer Science. With a strong foundation in programming and web development, I specialize in building efficient, scalable, and user-friendly web applications. My expertise includes JavaScript, React, Node.js, and responsive design, and I am passionate about leveraging technology to solve real-world problems.</p>
        <button className="green-btn">Download Resume</button>
      </div>
      <div>
      <img src={pic} alt="Personal Logo" className="about-logo" />
</div>
    </section>
  );
};

export default About;
