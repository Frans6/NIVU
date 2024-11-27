import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { FaSun, FaMoon, FaHome, FaInfoCircle } from 'react-icons/fa';
import About from './pages/About';
import Home from './pages/Home';
import './css/App.css';

const App = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      document.body.className = newTheme;
      return newTheme;
    });
  };

  return (
    <Router>
      <div className={`query-builder ${theme}`}>
        <nav className="navbar">
          <div>
            <Link to="/"><FaHome /> Home</Link>
            <Link to="/about"><FaInfoCircle /> Sobre</Link>
          </div>
        </nav>
          <button className="theme-toggle-button" onClick={toggleTheme}>
            {theme === 'light' ? <FaMoon /> : <FaSun />}
          </button>
        <Routes>
          <Route path="/" element={<Home theme={theme} />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;