import React, { useState, useEffect } from "react";

import "./Hero-module.css";

import MyMemoji from "../../../../public/My Memoji/Without background/Hii-NB.png";

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
    <section className="hero-section grid grid--2-cols">
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

        <ul className="my-link-list">
          <li>
            <a href="" className="my-link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="social-icon fb-icon"
                viewBox="0 0 512 512"
              >
                <path
                  d="M480 257.35c0-123.7-100.3-224-224-224s-224 100.3-224 224c0 111.8 81.9 204.47 189 221.29V322.12h-56.89v-64.77H221V208c0-56.13 33.45-87.16 84.61-87.16 24.51 0 50.15 4.38 50.15 4.38v55.13H327.5c-27.81 0-36.51 17.26-36.51 35v42h62.12l-9.92 64.77H291v156.54c107.1-16.81 189-109.48 189-221.31z"
                  fillRule="evenodd"
                />
              </svg>
            </a>
          </li>
          <li>
            <a href="" className="my-link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="social-icon insta-icon"
                viewBox="0 0 512 512"
              >
                <path d="M349.33 69.33a93.62 93.62 0 0193.34 93.34v186.66a93.62 93.62 0 01-93.34 93.34H162.67a93.62 93.62 0 01-93.34-93.34V162.67a93.62 93.62 0 0193.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z" />
                <path d="M377.33 162.67a28 28 0 1128-28 27.94 27.94 0 01-28 28zM256 181.33A74.67 74.67 0 11181.33 256 74.75 74.75 0 01256 181.33m0-37.33a112 112 0 10112 112 112 112 0 00-112-112z" />
              </svg>
            </a>
          </li>
          <li>
            <a href="" className="my-link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="social-icon linkden-icon"
                viewBox="0 0 512 512"
              >
                <path d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z" />
              </svg>
            </a>
          </li>
          <li>
            <a href="" className="my-link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="social-icon git-icon"
                viewBox="0 0 512 512"
              >
                <path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z" />
              </svg>
            </a>
          </li>
          <li>
            <a href="" className="my-link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="social-icon tweet-icon"
                viewBox="0 0 512 512"
              >
                <path d="M496 109.5a201.8 201.8 0 01-56.55 15.3 97.51 97.51 0 0043.33-53.6 197.74 197.74 0 01-62.56 23.5A99.14 99.14 0 00348.31 64c-54.42 0-98.46 43.4-98.46 96.9a93.21 93.21 0 002.54 22.1 280.7 280.7 0 01-203-101.3A95.69 95.69 0 0036 130.4c0 33.6 17.53 63.3 44 80.7A97.5 97.5 0 0135.22 199v1.2c0 47 34 86.1 79 95a100.76 100.76 0 01-25.94 3.4 94.38 94.38 0 01-18.51-1.8c12.51 38.5 48.92 66.5 92.05 67.3A199.59 199.59 0 0139.5 405.6a203 203 0 01-23.5-1.4A278.68 278.68 0 00166.74 448c181.36 0 280.44-147.7 280.44-275.8 0-4.2-.11-8.4-.31-12.5A198.48 198.48 0 00496 109.5z" />
              </svg>
            </a>
          </li>
          <li>
            <a href="" className="my-link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="social-icon whats-icon"
                viewBox="0 0 512 512"
              >
                <path
                  d="M414.73 97.1A222.14 222.14 0 00256.94 32C134 32 33.92 131.58 33.87 254a220.61 220.61 0 0029.78 111L32 480l118.25-30.87a223.63 223.63 0 00106.6 27h.09c122.93 0 223-99.59 223.06-222A220.18 220.18 0 00414.73 97.1zM256.94 438.66h-.08a185.75 185.75 0 01-94.36-25.72l-6.77-4-70.17 18.32 18.73-68.09-4.41-7A183.46 183.46 0 0171.53 254c0-101.73 83.21-184.5 185.48-184.5a185 185 0 01185.33 184.64c-.04 101.74-83.21 184.52-185.4 184.52zm101.69-138.19c-5.57-2.78-33-16.2-38.08-18.05s-8.83-2.78-12.54 2.78-14.4 18-17.65 21.75-6.5 4.16-12.07 1.38-23.54-8.63-44.83-27.53c-16.57-14.71-27.75-32.87-31-38.42s-.35-8.56 2.44-11.32c2.51-2.49 5.57-6.48 8.36-9.72s3.72-5.56 5.57-9.26.93-6.94-.46-9.71-12.54-30.08-17.18-41.19c-4.53-10.82-9.12-9.35-12.54-9.52-3.25-.16-7-.2-10.69-.2a20.53 20.53 0 00-14.86 6.94c-5.11 5.56-19.51 19-19.51 46.28s20 53.68 22.76 57.38 39.3 59.73 95.21 83.76a323.11 323.11 0 0031.78 11.68c13.35 4.22 25.5 3.63 35.1 2.2 10.71-1.59 33-13.42 37.63-26.38s4.64-24.06 3.25-26.37-5.11-3.71-10.69-6.48z"
                  fillRule="evenodd"
                />
              </svg>
            </a>
          </li>
        </ul>
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
