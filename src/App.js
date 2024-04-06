import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import Home from './home';
import About from './About';
import Contact from './Contact';
import './App.css'

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const handleLinkClick = (page) => {
    setCurrentPage(page);
  };

  let pageComponent;
  switch (currentPage) {
    case '/home':
      pageComponent = <Home />;
      break;
    case '/about':
      pageComponent = <About />;
      break;
    case '/contact':
      pageComponent = <Contact />;
      break;
    default:
      pageComponent = <Home />;
  }

  return (
    <Router>
      <div>
        <nav className='flex flex-row justify-between items-center'>
        <div >
          <h2 className='text-white font-inter font-bold text-4xl ml-20 mt-8 z-10 relative'>DRP.</h2>
        </div>
          <ul className='nav flex list-none gap-4 flex-row justify-end text-white mr-32 mt-8 z-10 relative'>
            <li className='no-underline text-white font-inter font-medium text-base uppercase'>
              <Link to="/home" onClick={() => handleLinkClick('/home')}>Home</Link>
            </li>
            <li className='no-underline text-white font-inter font-medium text-base uppercase'>
              <Link to="/about" onClick={() => handleLinkClick('/about')}>About</Link>
            </li>
            <li className='no-underline text-white font-inter font-medium text-base uppercase'>
              <Link to="/contact" onClick={() => handleLinkClick('/contact')}>Contact</Link>
            </li>
          </ul>
        </nav>
        {pageComponent}
      </div>
    </Router>
  );
};

export default App;

