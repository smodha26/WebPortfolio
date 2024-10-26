import React from 'react';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certificate from './components/Certificate';
import Skills from './components/Skills';
import './index.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Profile />
        <Education />
        <Experience />
        <Projects />
        <Certificate />
        <Skills />
      </main>
    </div>
  );
}

export default App;
