import React from "react";

import Hero from "./Contents/Hero";
import AboutMe from "./Contents/AboutMe";
import Skills from "./Contents/Skills";
import MyEducation from "./Contents/MyEducation";
import Projects from "./Contents/Projects";
import ContactMe from "./Contents/ContactMe";

const Main = () => {
  return (
    <>
      <main>
        <p>Main</p>
        <Hero />
        <AboutMe />
        <Skills />
        <MyEducation />
        <Projects />
        <ContactMe />
      </main>
    </>
  );
};

export default Main;
