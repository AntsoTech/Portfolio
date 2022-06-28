import React from "react";
import Watermark from "./Watermark";

const About = () => {
  return (
    <div className="about" id="apropos">
      <Watermark text="MON HISTOIRE" />
      <div className="about__info">
        <div className="about__info__intro">
          <h4>{`< Qui suis-je  / >`}</h4>
          <p>
            Passionné par les nouvelles technologies et fort d&apos;une dizaine
            d&apos;années d&apos;exéprience dans le web, j&apos;accompagne les
            créateurs d&apos;entreprise et les porteurs de projet à avoir un
            impact conséquent et positif sur le monde. Je travaille avec eux sur
            la manière de toucher les clients via les canaux digitaux avant de
            construire un écosystème web viable. Installé dans le Pays Basque,
            je travaille en 100% remote avec la possibilité de me déplacer
            jusqu&apos;à Toulouse, Bordeaux ou Paris (sur de gros projets).
          </p>
        </div>

        <div className="about__info__main">
          <h4>{`< Expériences passées / >`} </h4>
          <div className="about__info__main__experience1">
            {" "}
            <h3>{`< 2022 >`}</h3>
            <h2> Wild code school</h2>
            <p>
              6 mois de formation intensive “développeur web et web mobile”
              (équivalence BAC+2 informatique) Javascript (ES6) / Node.JS /
              Typescript / React / SQL
            </p>
          </div>
          <div className="about__info__main__experience2">
            {" "}
            <h3>{`< 2018-2021 >`}</h3>
            <h2> Galeries Lafayette </h2>
            <p>Head of innovation and digital-in-store product</p>
          </div>
          <div className="about__info__main__experience3">
            {" "}
            <h3>{`< 2015-2018 >`}</h3>
            <h2> Carrefour France (BU proximité)</h2>
            <p>Head of ecommerce operations & innovation</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
