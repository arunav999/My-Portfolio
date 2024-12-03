import React from "react";
import { Link } from "react-scroll";

import "./Footer-module.css";
import { myData } from "../../Dynamic Data/Data Stored/data";
import DynamicSocial from "../../Dynamic Data/DynamicSocial";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="foot-container">
        <div className="foot-box">
          <h3>Arunav's Portfolio</h3>
          <DynamicSocial />
          <p>
            Thank you for visiting my personal portfolio website. Connect with
            me over socials.
            <br />
            <br />
            Keep Rising. Connect with me over live chat!
          </p>
        </div>

        <div className="foot-box">
          <h3>Quick links</h3>
          <ul className="foot-nav-list">
            <li>
              <Link
                className="foot-nav-link"
                to="Home"
                spy={true}
                smooth={true}
                duration={500}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="foot-icon"
                  viewBox="0 0 512 512"
                >
                  <path d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM241 377c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l87-87-87-87c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L345 239c9.4 9.4 9.4 24.6 0 33.9L241 377z" />
                </svg>
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link
                className="foot-nav-link"
                to="About"
                spy={true}
                smooth={true}
                duration={500}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="foot-icon"
                  viewBox="0 0 512 512"
                >
                  <path d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM241 377c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l87-87-87-87c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L345 239c9.4 9.4 9.4 24.6 0 33.9L241 377z" />
                </svg>
                <span>About</span>
              </Link>
            </li>
            <li>
              <Link
                className="foot-nav-link"
                to="Skills"
                spy={true}
                smooth={true}
                duration={500}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="foot-icon"
                  viewBox="0 0 512 512"
                >
                  <path d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM241 377c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l87-87-87-87c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L345 239c9.4 9.4 9.4 24.6 0 33.9L241 377z" />
                </svg>
                <span>Skills</span>
              </Link>
            </li>
            <li>
              <Link
                className="foot-nav-link"
                to="Education"
                spy={true}
                smooth={true}
                duration={500}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="foot-icon"
                  viewBox="0 0 512 512"
                >
                  <path d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM241 377c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l87-87-87-87c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L345 239c9.4 9.4 9.4 24.6 0 33.9L241 377z" />
                </svg>
                <span>Education</span>
              </Link>
            </li>
            <li>
              <Link
                className="foot-nav-link"
                to="Projects"
                spy={true}
                smooth={true}
                duration={500}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="foot-icon"
                  viewBox="0 0 512 512"
                >
                  <path d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM241 377c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l87-87-87-87c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L345 239c9.4 9.4 9.4 24.6 0 33.9L241 377z" />
                </svg>
                <span>Projects</span>
              </Link>
            </li>
            <li>
              <Link
                className="foot-nav-link"
                to="Contact"
                spy={true}
                smooth={true}
                duration={500}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="foot-icon"
                  viewBox="0 0 512 512"
                >
                  <path d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM241 377c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l87-87-87-87c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L345 239c9.4 9.4 9.4 24.6 0 33.9L241 377z" />
                </svg>
                <span>Contact</span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="foot-box">
          <h3>Contact info</h3>
          <ul className="foot-cont-list">
            <li>
              <a href={myData[0].pHref} className="foot-cont-link">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="foot-icon"
                  viewBox="0 0 512 512"
                >
                  <path d="M347.1 24.6c7.7-18.6 28-28.5 47.4-23.2l88 24C499.9 30.2 512 46 512 64c0 247.4-200.6 448-448 448c-18 0-33.8-12.1-38.6-29.5l-24-88c-5.3-19.4 4.6-39.7 23.2-47.4l96-40c16.3-6.8 35.2-2.1 46.3 11.6L207.3 368c70.4-33.3 127.4-90.3 160.7-160.7L318.7 167c-13.7-11.2-18.4-30-11.6-46.3l40-96z" />
                </svg>
                {myData[0].phone}
              </a>
            </li>
            <li>
              <a href={myData[0].eHref} className="foot-cont-link">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="foot-icon"
                  viewBox="0 0 512 512"
                >
                  <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                </svg>
                {myData[0].email}
              </a>
            </li>
            <li>
              <a
                href={myData[0].lHref}
                className="foot-cont-link"
                target="blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="foot-icon"
                  viewBox="0 0 576 512"
                >
                  <path d="M408 120c0 54.6-73.1 151.9-105.2 192c-7.7 9.6-22 9.6-29.6 0C241.1 271.9 168 174.6 168 120C168 53.7 221.7 0 288 0s120 53.7 120 120zm8 80.4c3.5-6.9 6.7-13.8 9.6-20.6c.5-1.2 1-2.5 1.5-3.7l116-46.4C558.9 123.4 576 135 576 152l0 270.8c0 9.8-6 18.6-15.1 22.3L416 503l0-302.6zM137.6 138.3c2.4 14.1 7.2 28.3 12.8 41.5c2.9 6.8 6.1 13.7 9.6 20.6l0 251.4L32.9 502.7C17.1 509 0 497.4 0 480.4L0 209.6c0-9.8 6-18.6 15.1-22.3l122.6-49zM327.8 332c13.9-17.4 35.7-45.7 56.2-77l0 249.3L192 449.4 192 255c20.5 31.3 42.3 59.6 56.2 77c20.5 25.6 59.1 25.6 79.6 0zM288 152a40 40 0 1 0 0-80 40 40 0 1 0 0 80z" />
                </svg>
                {myData[0].location}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
