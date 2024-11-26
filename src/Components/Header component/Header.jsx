import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

import "./Header-module.css";
import Logo1 from "../../logo/AS-White.png";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
    document.body.className = isDarkMode ? "light-mode" : "dark-mode";
  };

  useEffect(() => {
    const handleScroll = () => {
      const navArea = document.getElementById("navArea");
      if (window.scrollY > 0) {
        navArea.classList.add("is-sticky");
      } else {
        navArea.classList.remove("is-sticky");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="header" id="navArea">
      <div className="myName">
        <Link
          className=""
          to="Home"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <img src={Logo1} alt="My name logo." className="logo" />
        </Link>
        <Link
          className="name"
          to="Home"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          Arunav
        </Link>
      </div>

      <nav className="main-nav">
        <ul className="main-nav-list">
          <li>
            <Link
              className="main-nav-link"
              activeClass="active"
              to="About"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className="main-nav-link"
              activeClass="active"
              to="Skills"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              className="main-nav-link"
              activeClass="active"
              to="Education"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Education
            </Link>
          </li>
          <li>
            <Link
              className="main-nav-link"
              activeClass="active"
              to="Projects"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              className="main-nav-link"
              activeClass="active"
              to="Contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Contact
            </Link>
          </li>
          {/* <li>
            <button onClick={toggleTheme} className="theme-toggle-btn">
              {isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            </button>
          </li> */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
