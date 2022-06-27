import React from "react";
import NavBar from "./NavBar";
import About from "./About";
import ProjectList from "./ProjectList";
import Skills from "./Skills";
import Intro from "./Intro";
import Contact from "./Contact";
import Footer from "./Footer";

const OnePage = () => {
  return (
    <div className="onePage">
      <NavBar />
      <Intro />
      <ProjectList />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default OnePage;
