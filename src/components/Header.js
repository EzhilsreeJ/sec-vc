import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="app-header">
      <div className="container">
        <img src="/images/saveetha_logo.png" alt="Saveetha Engineering College Logo" className="logo" />
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/academics">Academics</a></li>
            <li><a href="/admissions">Admissions</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;