import React from "react";
import NavBar from "./NavBar";
import About from "./About";
import ProjectList from "./ProjectList";
import Skills from "./Skills";
import Softskills from "./Softskills";
import Intro from "./Intro";
import Contact from "./Contact";

const OnePage = () => {
  return (
    <div className="onePage">
      <NavBar />
      <Intro />
      <About />
      <Skills />
      <Softskills />
      <ProjectList />
      <Contact />
    </div>
  );
};

export default OnePage;
