import React, { useEffect } from "react";

import "./Header-module.css";
import Logo1 from "../../../public/logo/AS-White.png";

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
    <>
      <header className="header" id="navArea">
        <div className="myName">
          <a href="#">
            <img src={Logo1} alt="My name logo." className="logo" />
          </a>
          <a href="#" className="name">
            Arunav
          </a>
        </div>
        <nav className="main-nav">
          <ul className="main-nav-list">
            <li>
              <a href="#" className="main-nav-link">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="main-nav-link">
                About
              </a>
            </li>
            <li>
              <a href="#" className="main-nav-link">
                Skills
              </a>
            </li>
            <li>
              <a href="#" className="main-nav-link">
                Education
              </a>
            </li>
            <li>
              <a href="#" className="main-nav-link">
                Projects
              </a>
            </li>
            <li>
              <a href="#" className="main-nav-link">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
