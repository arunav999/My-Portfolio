import React, { useState, useEffect } from "react";

import "./Hero-module.css";

import MyMemoji from "../../../My Memoji/Without background/Hii-NB.png";
import DynamicSocial from "../../../Dynamic Data/DynamicSocial";

const Hero = () => {
  const texts = ["Web Designing", "Web Development", "Frontend Development"];
  const typingDuration = 1100;
  const deletingDuration = 350;
  const blinkSpeed = 250;
  const pauseDuration = 1500;

  const [state, setState] = useState({
    text: "",
    isDeleting: false,
    index: 0,
    blink: true,
    pause: false,
  });

  useEffect(() => {
    const currentWord = texts[state.index];
    const totalTime = state.isDeleting
      ? deletingDuration / currentWord.length
      : typingDuration / currentWord.length;

    const timeout = setTimeout(
      () => {
        if (state.pause) {
          setState((prev) => ({ ...prev, pause: false }));
        } else if (state.isDeleting) {
          const newText = currentWord.slice(0, state.text.length - 1);
          setState((prev) => ({
            ...prev,
            text: newText,
            isDeleting: newText.length === 0 ? false : prev.isDeleting,
            index:
              newText.length === 0
                ? (prev.index + 1) % texts.length
                : prev.index,
          }));
        } else {
          const newText = currentWord.slice(0, state.text.length + 1);
          setState((prev) => ({
            ...prev,
            text: newText,
            isDeleting:
              newText.length === currentWord.length ? true : prev.isDeleting,
            pause: newText.length === currentWord.length,
          }));
        }
      },
      state.pause ? pauseDuration : totalTime
    );
    return () => clearTimeout(timeout);
  }, [state.text, state.isDeleting, state.index, state.pause]);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setState((prev) => ({
        ...prev,
        blink: !prev.blink,
      }));
    }, blinkSpeed);

    return () => clearInterval(blinkInterval);
  }, []);

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

        <a href="" className="about-me-link">
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
