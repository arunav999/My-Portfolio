import React, { forwardRef } from "react";
import "./Hero-module.css";
import MyMemoji from "../../../../public/My Memoji/Without background/Hii-NB.png";

const Hero = forwardRef((props, ref) => {
  return (
    <section ref={ref} className="hero-section grid grid--2-cols">
      <div className="my-info">
        <p className="greeting">Hi, there</p>
        <p className="my-name">
          I'm Arunav <span>Singh</span>
        </p>
        <div className="dynamic">
          <p>I'm into</p>
          <p>
            {props.dynamicText}
            <span style={{ opacity: props.blink ? 1 : 0 }}>|</span>
          </p>
        </div>

        <a href="#" className="about-me-link">
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
        </a>
      </div>

      <div className="memoji">
        <figure className="memoji-item">
          <img src={MyMemoji} alt="My memoji image" />
        </figure>
      </div>
    </section>
  );
});

export default Hero;
