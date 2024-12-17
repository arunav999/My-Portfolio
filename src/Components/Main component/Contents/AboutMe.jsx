import React from "react";

import "./AboutMe.css";
import { myData } from "../../../Dynamic Data/Data Stored/data";
import WorkingNB from "../../../My Memoji/Without background/Working-NB.png";

const AboutMe = () => {
  return (
    <section className="aboutMeSection" id="About">
      <div className="sec-container content-gap">
        <h2 className="heading-secondary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="headIcon"
            viewBox="0 0 448 512"
          >
            <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" />
          </svg>
          About <span>Me</span>
        </h2>

        <div className="row">
          <div className="memoji-img">
            <img src={WorkingNB} alt="my-image" className="memoji-working" />
          </div>

          <div className="content">
            <h3 className="heading-tertiary">{myData[0].myName}</h3>
            <span>{myData[0].occupation}</span>
            <p className="desc">{myData[0].description}</p>

            <div className="box-container">
              <p className="email">
                <a href={myData[0].eHref} className="contact-link">
                  <span>E-mail: </span>
                  <span>{myData[0].email}</span>
                </a>
              </p>
              <p className="phone">
                <a href={myData[0].pHref} className="contact-link">
                  <span>Phone: </span>
                  <span>{myData[0].phone}</span>
                </a>
              </p>
              <p className="place">
                <a
                  href={myData[0].lHref}
                  target="blank"
                  className="contact-link"
                >
                  <span>Place: </span>
                  <span>{myData[0].location}</span>
                </a>
              </p>
            </div>

            <div className="res-btn">
              <a
                href="https://drive.google.com/file/d/1zKyGlJOQTvbGZzbGZFIIJ9SSkLl5O1mL/view?usp=sharing"
                className="res-link"
                target="blank"
              >
                Resume &gt;
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
