import React from "react";

import "./Skills-module.css";

import HtmlIcon from "../../../logo/tech-logo/html5-icon.png";
import CssIcon from "../../../logo/tech-logo/css3-icon.png";
import JsIcon from "../../../logo/tech-logo/js-icon.png";
import ReactIcon from "../../../logo/tech-logo/react-icon.png";
import NextIcon from "../../../logo/tech-logo/nextjs-icon.png";
import GithubIcon from "../../../logo/tech-logo/github-icon.png";
import GitIcon from "../../../logo/tech-logo/git_VCS-icon.png";
import NetifyIcon from "../../../logo/tech-logo/netify-icon.png";

const Skills = () => {
  return (
    <section className="skillsSection">
      <div className="sec-container">
        <h2 className="heading-secondary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="headIcon"
            viewBox="0 0 640 512"
          >
            <path d="M64 96c0-35.3 28.7-64 64-64l384 0c35.3 0 64 28.7 64 64l0 256-64 0 0-256L128 96l0 256-64 0L64 96zM0 403.2C0 392.6 8.6 384 19.2 384l601.6 0c10.6 0 19.2 8.6 19.2 19.2c0 42.4-34.4 76.8-76.8 76.8L76.8 480C34.4 480 0 445.6 0 403.2zM281 209l-31 31 31 31c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-48-48c-9.4-9.4-9.4-24.6 0-33.9l48-48c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zM393 175l48 48c9.4 9.4 9.4 24.6 0 33.9l-48 48c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l31-31-31-31c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z" />
          </svg>
          Skills &<span>Abilities</span>
        </h2>

        <div className="skills">
          <div className="skills-container">
            <div className="bar">
              <div className="info">
                <img src={HtmlIcon} alt="html-icon" />
                <span>HTML</span>
              </div>
            </div>
            <div className="bar">
              <div className="info">
                <img src={CssIcon} alt="css-icon" />
                <span>CSS</span>
              </div>
            </div>
            <div className="bar">
              <div className="info">
                <img src={JsIcon} alt="js-icon" />
                <span>Javascript</span>
              </div>
            </div>
            <div className="bar">
              <div className="info">
                <img src={ReactIcon} alt="" />
                <span>React</span>
              </div>
            </div>
            <div className="bar">
              <div className="info">
                <img src={NextIcon} alt="" className="filter"/>
                <span>next</span>
              </div>
            </div>
            <div className="bar">
              <div className="info">
                <img src={GithubIcon} alt="" className="filter"/>
                <span>github</span>
              </div>
            </div>
            <div className="bar">
              <div className="info">
                <img src={GitIcon} alt="" />
                <span>git vcs</span>
              </div>
            </div>
            <div className="bar">
              <div className="info">
                <img src={NetifyIcon} alt="" />
                <span>netify</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
