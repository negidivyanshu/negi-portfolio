import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li><a href="#about">about</a></li>
        <li><a href="#skills">skills</a></li>
        <li><a href="#experience">experience</a></li>
        <li><a href="#projects">projects</a></li>
        <li><a href="#contact">hit me up</a></li>
      </ul>
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/divyanshu-negi-0b3a84254" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <i className="fas fa-coffee"></i>
        </a>
         <a href="mailto:negidivyanshu9656@gmail.com?subject=Contact%20from%20Portfolio%20Website">
          <i className="fas fa-envelope"></i>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;