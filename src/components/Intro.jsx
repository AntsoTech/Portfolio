import React from "react";
import { Link } from "react-scroll";

const Intro = () => {
  return (
    <div className="intro" id="intro">
      <div className="intro__text">
        <h3 className="intro__text__quote"> {`< Hello, je m'appelle >`} </h3>
        <h1 className="intro__text__name">Antso RAKOTOSON </h1>
        <h2 className="intro__text__speech">
          {" "}
          Je suis développeur et je crée des expériences web et mobiles qui
          <p className="intro__text__speech__animated">
            {" "}
            <span>
              apportent de la valeur <br />
              suscitent de l&apos;émotion <br />
              racontent une histoire <br />
              créent un véritable lien
              <br />{" "}
            </span>
          </p>
        </h2>
      </div>
      <div className="intro__footer">
        <Link spy smooth to="contact">
          <button type="button" className="intro__footer__button1">
            {" "}
            Me contacter{" "}
          </button>
        </Link>
        <Link spy smooth to="apropos">
          <button type="button" className="intro__footer__button2">
            Découvrir mon histoire
          </button>
        </Link>
        <div className="intro__footer__arrow">
          <Link spy smooth to="apropos">
            <img
              src="/assets/images/down-arrow.png"
              alt="Découvrir mon histoire"
              width="20vw"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Intro;
