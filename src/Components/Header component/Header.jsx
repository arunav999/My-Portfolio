import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

import "./Header.css";

const Header = () => {
  const [isChecked, SetIsChecked] = useState(false);

  const toogleMenu = () => {
    SetIsChecked((prev) => !prev);
  };

  const handleCloseNav = () => {
    SetIsChecked(false);
  };

  const getOffSet = (offSetValue) => {
    const width = window.innerWidth;

    if(width <= 492) {
      return width <= 492 ? -30 : offSetValue;
    } else if(width <= 767) {
      return width <= 767 ? -30 : offSetValue;
    } else if(width <= 1024) {
      return width <= 1024 ? -30 : offSetValue;
    } else if(width <= 1235) {
      return width <=1235 ? -30 : offSetValue;
    } else {
      return offSetValue;
    }
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
          className="name"
          to="Home"
          spy={true}
          smooth={true}
          offset={-100}
          duration={1500}
        >
          Arunav
        </Link>
      </div>

      <label className={`hamburger-menu ${isChecked ? "checked" : ""}`}>
        <input type="checkbox" onChange={toogleMenu} checked={isChecked} />
      </label>

      <nav className={`main-nav ${isChecked ? "nav-open" : ""}`}>
        <ul className="main-nav-list">
          <li>
            <Link
              className="main-nav-link"
              activeClass="active"
              to="About"
              spy={true}
              smooth={true}
              offset={getOffSet(-70)}
              duration={1500}
              onClick={handleCloseNav}
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
              offset={getOffSet(-65)}
              duration={1500}
              onClick={handleCloseNav}
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
              offset={getOffSet(-40)}
              duration={1500}
              onClick={handleCloseNav}
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
              offset={getOffSet(-35)}
              duration={1500}
              onClick={handleCloseNav}
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
              offset={getOffSet(-30)}
              duration={1500}
              onClick={handleCloseNav}
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
