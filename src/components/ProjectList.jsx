import React from "react";
import ProjectDetails from "./ProjectDetails";
import ProjectDetails2 from "./ProjectDetails2";
import Watermark from "./Watermark";

const ProjectList = () => {
  return (
    <div className="projectList">
      <Watermark text="MES PROJETS" />
      <ProjectDetails2
        title="LUXURY TINY HOUSES"
        imagename1="tinyhouse1.png"
        imagename2="tinyhouse2.png"
        description="Xpanse is a project where we created the first spatial platform that connects astronauts with spatial and discovery missions"
        url="blank"
      />
      <ProjectDetails
        title="ASTRONAUTS XPANSE"
        imagevertical="xpanse2.png"
        imagehorizontal="xpanse1.png"
        description="Xpanse is a project where we created the first spatial platform that connects astronauts with spatial and discovery missions"
        url="blank"
      />
      <ProjectDetails2
        title="E-LEARNING PLATFORM"
        imagename1="starnethorizontal.jpg"
        imagename2="starnetvertical2.jpg"
        description="Xpanse is a project where we created the first spatial platform that connects astronauts with spatial and discovery missions"
        url="blank"
      />
    </div>
  );
};

export default ProjectList;
