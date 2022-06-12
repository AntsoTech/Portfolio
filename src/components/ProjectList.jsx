import React from "react";
import ProjectDetails from "./ProjectDetails";
import ProjectDetails2 from "./ProjectDetails2";
import Watermark from "./Watermark";

const ProjectList = () => {
  return (
    <div className="projectList" id="mesprojets">
      <Watermark text="MES PROJETS" />
      <ProjectDetails2
        title="LUXURY TINY HOUSES"
        imagename1="tinyhouse1.png"
        imagename2="tinyhouse2.png"
        description="Tiny house est un projet de site internet pour une marque de Tiny house luxueuses et écologiques. Le but du site est de mettre en avant leur expertise dans la construction et faire comprendre aux gens qu'il est possible de vivre confortablement en ayant un impact modéré sur l'environnement"
      />
      <ProjectDetails
        title="ASTRONAUTS XPANSE"
        imagevertical="xpanse2.png"
        imagehorizontal="xpanse1.png"
        description="Xpanse est une plateforme fictive qui met en relation des astronautes freelance et des entreprises spatiales à la recherche d'expertises spécifiques sur des missions de tourisme ou d'opérations de maintenance"
        url="#"
      />
      <ProjectDetails2
        title="E-LEARNING PLATFORM"
        imagename1="starnethorizontal.jpg"
        imagename2="starnetvertical2.jpg"
        description="Starnet est une entreprise qui veut démocratiser la blockchain auprès de tous. Pour eux, nous avons créé une plateforme de e-learning mêlant expérience gamifiée et parcours personalisée pour un apprentissage ludique et efficace"
        url="#"
      />
    </div>
  );
};

export default ProjectList;
