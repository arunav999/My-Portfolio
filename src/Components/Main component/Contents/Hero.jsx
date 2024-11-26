import React from "react";
import { Link } from "react-scroll";

import "./Hero.css";

import TypingLogic from "../../../Dynamic Data/TypingLogic";
import MyMemoji from "../../../My Memoji/Without background/Hii-NB.png";
import DynamicSocial from "../../../Dynamic Data/DynamicSocial";

const Hero = () => {
  const state = TypingLogic();

  return (
    <section className="hero-section grid grid--2-cols" id="Home">
      <div className="my-info">
        <p className="greeting">Hi, there</p>
        <p className="my-name">
          I'm Arunav <span>Singh</span>
        </p>
        <div className="dynamic">
          <p>I'm into</p>
          <p>
            {state.text}
            <span style={{ opacity: state.blink ? 1 : 0 }}>|</span>
          </p>
        </div>

        <Link
          className="about-me-link"
          to="About"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <span>About me</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="down-arrow-icon"
            viewBox="0 0 512 512"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
              d="M176 262.62L256 342l80-79.38M256 330.97V170"
            />
            <path
              d="M256 64C150 64 64 150 64 256s86 192 192 192 192-86 192-192S362 64 256 64z"
              fill="none"
              stroke="currentColor"
              strokeMiterlimit="10"
              strokeWidth="32"
            />
          </svg>
        </Link>

        <DynamicSocial />
      </div>

      <div className="memoji">
        <figure className="memoji-item">
          <img src={MyMemoji} alt="My memoji image" />
        </figure>
      </div>
    </section>
  );
};

export default Hero;
