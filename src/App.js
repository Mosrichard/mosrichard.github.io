import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './components/Home';
import Projects from './components/Projects';

function App() {
  const [activeSection, setActiveSection] = useState(() => {
    return localStorage.getItem('activeSection') || 'home';
  });

  useEffect(() => {
    localStorage.setItem('activeSection', activeSection);
  }, [activeSection]);

  const renderSection = () => {
    switch(activeSection) {
      case 'projects': return <Projects />;
      default: return <Home />;
    }
  };

  return (
    <div className="app">
      <nav className="navbar">
        <div className="nav-links">
          <a href="#home" className={activeSection === 'home' ? 'active' : ''} onClick={(e) => { e.preventDefault(); setActiveSection('home'); }}>Home</a>
          <a href="#projects" className={activeSection === 'projects' ? 'active' : ''} onClick={(e) => { e.preventDefault(); setActiveSection('projects'); }}>Projects</a>
        </div>
      </nav>

      <div className="main-content">
        {renderSection()}
      </div>
    </div>
  );
}

export default App;