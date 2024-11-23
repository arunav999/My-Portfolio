import React from "react";

import "./Header-module.css";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="my-name">
          <a href="">Arunav Singh</a>
        </div>
        <nav className="main-nav">
          <ul className="main-nav-list">
            <li>
              <a href="" className="main-nav-link">
                Home
              </a>
            </li>
            <li>
              <a href="" className="main-nav-link">
                About
              </a>
            </li>
            <li>
              <a href="" className="main-nav-link">
                Skills
              </a>
            </li>
            <li>
              <a href="" className="main-nav-link">
                Education
              </a>
            </li>
            <li>
              <a href="" className="main-nav-link">
                Projects
              </a>
            </li>
            <li>
              <a href="" className="main-nav-link">
                Contact me
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
