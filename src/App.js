import React from 'react';
import './App.css';
import Typinganimation from './typing';
import Navbar from './navbar';
import About from './about';
import Skills from './skills';
import Projects from './projects';
import Experience from './experience';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Typinganimation />
      <About />
      <Experience />
      <Skills />
      <Projects />  
      <footer className="copyright text-center">
        <p>© 2025 Divyanshu Negi. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
