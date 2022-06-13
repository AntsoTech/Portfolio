import React from "react";
import Watermark from "./Watermark";

const Softskills = () => {
  const softskillsList = [
    { icon: "👊🏽", skill: "Esprit d'équipe" },
    { icon: "🕵🏽‍♂️ ", skill: "Curiosité" },
    { icon: "🥷🏽", skill: "Pugnacité" },
    { icon: "👨🏽‍🏫", skill: "Organisation" },
    { icon: "🙋🏽‍♂️", skill: "Initiative" },
    { icon: "👨🏽‍🔬", skill: "Orienté-Solution" },
  ];

  // const valuesList = [
  //   "« On juge la valeur d'un produit à son utilisation, non à sa technologie »",
  //   "« Vos utilisateurs les plus mécontents sont la plus grande source d'apprentissage »",
  //   "« La simplicité est le secret de la réussite »",
  //   "« Les meilleures choses qui arrivent dans le monde ne sont pas le résultat d'un seul homme, mais le travail de tout une équipe »",
  // ];

  return (
    <div className="softskills" id="mesvaleurs">
      <Watermark text="MES VALEURS" />
      <div className="softskills__container softskills__container-left">
        {softskillsList.map((softskill, index) => (
          <div key={index} className="softskills__container__item">
            <h3>{softskill.icon}</h3>
            <div className="softskills__container__item__roundel" />
            <div className="softskills__container__item__line"> </div>
            <div className="softskills__container__item__roundel" />
            <h2>{softskill.skill}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Softskills;
