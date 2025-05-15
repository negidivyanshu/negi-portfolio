import React from 'react';
import './index.css';

const Typinganimation = () => {
  const message = "Hello there.";

  return (
    <section className='m-auto p-0 '>
      <div className="typing-animation">
      <div className="message-container">
        {message}
      </div>
      <div className="about-paragraph">
        <h5 className="about-text">
          I'm <span className="highlight">Divyanshu</span>, a passionate Software Developer who loves turning ideas into reality through code. With a knack for creativity and problem-solving, I specialize in crafting intuitive and visually engaging web experiences using JavaScript, React, and Node.js.
        </h5>
        <button className="green-btn">
          say Hi
          <i className="fas fa-envelope" aria-hidden="true"></i>
        </button>
      </div>
    </div>
    </section>
  );
};

export default Typinganimation;