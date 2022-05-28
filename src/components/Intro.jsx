import React from "react";

const Intro = () => {
  // je crée un tableau avec les périphrases
  const sentencesList = [
    `apportent de la valeur`,
    `suscitent de l'émotion`,
    `créent une vraie relation`,
    `génèrent une véritable interaction`,
  ];

  return (
    <div className="intro">
      <div className="intro__text">
        <h3 className="intro__text__quote"> {`< Hello, je m'appelle  / >`} </h3>
        <h1 className="intro__text__name">Antso RAKOTOSON </h1>
        <h2 className="intro__text__speech">
          {" "}
          Je suis développeur et je crée des expériences web et mobiles <br />
          qui
          <span className="intro__text__speech__animated">
            {" "}
            {sentencesList[3]}{" "}
          </span>
        </h2>
      </div>
      <div className="intro__footer">
        <button type="button" className="intro__footer__button1">
          {" "}
          Me contacter{" "}
        </button>
        <button type="button" className="intro__footer__button2">
          {" "}
          Découvrir mon histoire{" "}
        </button>
        <div class="intro__footer__arrow">
          <a href="">
            <img
              src="./public/assets/images/arrow-down-circle.svg"
              alt="Découvrir le concept"
              width="30vw"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Intro;
