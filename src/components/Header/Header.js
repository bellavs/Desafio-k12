import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
  useEffect(() => {
    const hamburger = document.querySelector(".hamburger");
    const nav = document.querySelector(".nav");

    const handleClick = () => {
      nav.classList.toggle("active");
    };

    hamburger.addEventListener("click", handleClick);

    return () => {
      hamburger.removeEventListener("click", handleClick);
    };
  }, []); 

  return (
    <header className="header">
      <nav className="nav">
        <a href="home.html" className="logo"><img src="/logo.png" alt="Logo"/></a>
        <button className="hamburger"></button>
        <ul className="nav-list">
          <li><Link to="/post">Post</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/contato">Contato</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;