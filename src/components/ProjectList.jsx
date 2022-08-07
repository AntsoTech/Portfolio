import React from "react";
import ProjectDetails from "./ProjectDetails";
import ProjectDetails2 from "./ProjectDetails2";
import Watermark from "./Watermark";

const ProjectList = () => {
  return (
    <div className="projectList" id="mesprojets">
      <Watermark text="MES PROJETS" />
      <ProjectDetails2
        title="E-LEARNING PLATFORM"
        imagename1="starnethorizontal.jpg"
        imagename2="starnetvertical2.jpg"
        description="Starnet est une entreprise qui veut démocratiser la blockchain auprès de tous. Pour eux, nous avons créé une plateforme de e-learning mêlant expérience gamifiée et parcours personalisé pour un apprentissage ludique et efficace"
        urlGit="https://github.com/stefankolpacoff/star-net-back"
        urlWeb="https://star-net-front.vercel.app/"
        skills={["Typescript", "ExpressJS", "Fullstack", "MySQL"]}
      />
      <ProjectDetails
        title="ASTRONAUTS XPANSE"
        imagevertical="xpanse1.jpg"
        imagehorizontal="xpanse2.jpg"
        description="Xpanse est une plateforme fictive qui met en relation des astronautes freelance et des entreprises spatiales à la recherche d'expertises spécifiques sur des missions de tourisme ou d'opérations de maintenance"
        urlGit="https://github.com/AntsoTech/xpanse"
        urlWeb="https://xpanse-agency.vercel.app/"
        skills={["React", "API rest", "Tailwind"]}
      />
      <ProjectDetails2
        title="LUXURY TINY HOUSES"
        imagename1="tiny10.jpg"
        imagename2="tinyhouse3.jpg"
        description="Tiny house est le site internet d'une marque de Tiny house luxueuses et écologiques. Le but du site est de convaincre chaque visiteur qu'un logement confortable et luxueux peut avoir un impact très modéré sur son environnement."
        urlGit="https://github.com/AntsoTech/LuxuryTinyHouses"
        urlWeb="https://luxury-tinyhouses.vercel.app/"
        skills={["React", "Mobile-first", "Sass"]}
      />
      <ProjectDetails
        title="LANDAREA GARDEN"
        imagevertical="landareaV1.jpg"
        imagehorizontal="landareaH.jpg"
        description="Landarea est un site construit en 48h lors d'un hackaton. C'est une plateforme d'upcycling, de recycling et d'entretien dédiées aux plantes et aux fleurs."
        urlGit="https://github.com/JacquesPoulin/Landarea"
        urlWeb="https://landarea.vercel.app/"
        skills={["React", "Catalogue produit", "Tailwind"]}
      />
      <ProjectDetails2
        title="PROJECTS PLATFORM"
        imagename1="upsidehorizontal.jpg"
        imagename2="upsidevertical.jpg"
        description="Upside est une plateforme collaborative de projets qui permet à tous les salariés d'avoir une vue globale sur les projets de leur entreprise"
        urlGit="https://github.com/AntsoTech/upside-front"
        urlWeb="https://upside.vercel.app/"
        skills={["Typescript", "ExpressJS", "Fullstack", "Tailwind"]}
      />
    </div>
  );
};

export default ProjectList;
