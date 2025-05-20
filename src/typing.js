import React, { useEffect, useState } from 'react';
import './index.css';

const Typinganimation = () => {
  const text = "hello there";
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [index, setIndex] = useState(0);
  const [loop, setLoop] = useState(0);
  const typingSpeed = 120;
  const pause = 1000;

  useEffect(() => {
    let timeout;
    if (!deleting && index < text.length) {
      timeout = setTimeout(() => {
        setDisplayed(text.slice(0, index + 1));
        setIndex(index + 1);
      }, typingSpeed);
    } else if (!deleting && index === text.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && index > 0) {
      timeout = setTimeout(() => {
        setDisplayed(text.slice(0, index - 1));
        setIndex(index - 1);
      }, typingSpeed / 2);
    } else if (deleting && index === 0) {
      timeout = setTimeout(() => {
        setDeleting(false);
        setLoop(loop + 1);
      }, pause / 2);
    }
    return () => clearTimeout(timeout);
  }, [index, deleting, loop, text]);

  return (
    <section className='m-auto p-0 '>
      <div className="typing-animation">
        <div className="message-container">
          <h1 className='greeting-header'>
            {displayed}
            <span className="blinking-cursor">|</span>
          </h1>
        </div>
        <div className="about-paragraph">
          <p className="about-text">
            I'm <span className="highlight">Divyanshu</span>, a passionate Software Developer who loves turning ideas into reality through code. With a knack for creativity and problem-solving, I specialize in crafting intuitive and visually engaging web experiences using JavaScript, React, and Node.js.
          </p>
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