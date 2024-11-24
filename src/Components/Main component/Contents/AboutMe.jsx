import React from "react";

import "./AboutMe-module.css";
import WorkingNB from "../../../My Memoji/Without background/Working-NB.png";

const AboutMe = () => {
  const data = {
    myName: "Arunav Singh",
    occupation: "Web Developer",
    description:
      "Aspiring Web Developer and Web Designer with a focus on front-end development. Proficient in HTML, CSS, JavaScript, and ReactJS at a beginner level, with a passion for creating responsive and user-friendly web interfaces. Dedicated to learning and improving in the field of web development.",
    email: "arunavsingh999@gmail.com",
    phone: "+91-7008122921",
    place: "Bengaluru, India - 560048",
  };

  return (
    <section className="aboutMeSection">
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
        <div className="image">
          <img src={WorkingNB} alt="my-image" className="memoji-working" />
        </div>

        <div className="content">
          <h3 className="heading-tertiary">{data.myName}</h3>
          <span>{data.occupation}</span>
          <p className="desc">{data.description}</p>

          <div className="box-container">
            <p className="email">
              <a
                href="mailto:arunavsingh999@gmail.com"
                className="contact-link"
              >
                <span>E-mail: </span>
                {data.email}
              </a>
            </p>
            <p className="phone">
              <a href="tel:7008122921" className="contact-link">
                <span>Phone: </span>
                {data.phone}
              </a>
            </p>
            <p className="place">
              <span>Place: </span>
              {data.place}
            </p>
          </div>

          <div className="res-btn">
            <a href="" className="res-link" target="blank">
              Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
