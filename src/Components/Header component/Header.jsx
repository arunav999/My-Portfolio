import React, { useEffect } from "react";
import { Link } from "react-scroll";

import "./Header.css";

const Header = () => {
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
              offset={-70}
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
              offset={-65}
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
              offset={-40}
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
        </ul>
      </nav>
    </header>
  );
};

export default Header;
