import React from "react";
import NavBar from "./NavBar";
import About from "./About";
import ProjectList from "./ProjectList";
import Skills from "./Skills";
import Intro from "./Intro";

const OnePage = () => {
  return (
    <div className="onePage">
      <NavBar />
      <Intro />
      <About />
      <Skills />
      <ProjectList />
    </div>
  );
};

export default OnePage;
