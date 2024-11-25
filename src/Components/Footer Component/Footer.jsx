import React from "react";
import { Link } from "react-scroll";

import "./Footer-module.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="foot-container">
        <div className="foot-box">
          <h3>Arunav's Portfolio</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed aliquid
            at aliquam aperiam, exercitationem quia!
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque,
            sunt!
          </p>
        </div>

        <div className="foot-box">
          <h3>Quick links</h3>
          <ul>
            <li>
              <Link
                activeClass=""
                to="Home"
                spy={true}
                smooth={true}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                activeClass=""
                to="About"
                spy={true}
                smooth={true}
                duration={500}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                activeClass=""
                to="Skills"
                spy={true}
                smooth={true}
                duration={500}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                activeClass=""
                to="Education"
                spy={true}
                smooth={true}
                duration={500}
              >
                Education
              </Link>
            </li>
            <li>
              <Link
                activeClass=""
                to="Projects"
                spy={true}
                smooth={true}
                duration={500}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                activeClass=""
                to="Contact"
                spy={true}
                smooth={true}
                duration={500}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="foot-box">
          <h3>Contact info</h3>
          <p>
            <a href="">
              <i></i>
              ph no
            </a>
          </p>
          <p>
            <a href="">
              <i></i>
              ph no
            </a>
          </p>
          <p>
            <a href="">
              <i></i>
              ph no
            </a>
          </p>

          <div className="share">
            <a href="">links</a>
            <a href="">links</a>
            <a href="">links</a>
            <a href="">links</a>
            <a href="">links</a>
          </div>
        </div>
      </div>

      <h2 className="credit">
        Designed with
        <i></i>
        by
        <a href="">Arunav Singh</a>
      </h2>
    </footer>
  );
};

export default Footer;
