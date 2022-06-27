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
        description="Tiny house est le site internet d'une marque de Tiny house luxueuses et écologiques. Le but du site est de convaincre chaque visiteur qu'un logement confortable et luxueux peut avoir un impact très modéré sur son environnement."
        urlGit="#"
        urlWeb="https://luxury-tinyhouses.vercel.app/"
        skills={["React", "Mobile-first", "Sass"]}
      />
      <ProjectDetails
        title="ASTRONAUTS XPANSE"
        imagevertical="xpanse2.png"
        imagehorizontal="xpanse1.png"
        description="Xpanse est une plateforme fictive qui met en relation des astronautes freelance et des entreprises spatiales à la recherche d'expertises spécifiques sur des missions de tourisme ou d'opérations de maintenance"
        urlGit="#"
        urlWeb="https://xpanse-agency.vercel.app/"
        skills={["React", "API rest", "Tailwind"]}
      />
      <ProjectDetails2
        title="E-LEARNING PLATFORM"
        imagename1="starnethorizontal.jpg"
        imagename2="starnetvertical2.jpg"
        description="Starnet est une entreprise qui veut démocratiser la blockchain auprès de tous. Pour eux, nous avons créé une plateforme de e-learning mêlant expérience gamifiée et parcours personalisé pour un apprentissage ludique et efficace"
        urlGit="#"
        skills={["Typescript", "ExpressJS", "Fullstack", "MySQL"]}
      />
    </div>
  );
};

export default ProjectList;
