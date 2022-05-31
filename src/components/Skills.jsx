import React from "react";
import Watermark from "./Watermark";

const Skills = () => {
  const imageWidth = "70px";
  return (
    <div className="skills">
      <Watermark text="MES TECHNOLOGIES" />
      <div className="skills__intro">
        <h2 className="skills__intro__quote">
          « On se lasse de tout, excepté d'apprendre. »
        </h2>
        <h2 className="skills__intro__author"> Virgile</h2>
      </div>
      <div className="skills__container">
        <div className="skills__container__box">
          <img
            src="./public/assets/images/Figma-light.svg"
            alt=""
            width={imageWidth}
          />
          <h2> Figma </h2>
        </div>
        <div className="skills__container__box">
          <img
            src="./public/assets/images/TailwindCSS-Light.svg"
            alt=""
            width={imageWidth}
          />
          <h2> Tailwind </h2>
        </div>
        <div className="skills__container__box">
          <img
            src="./public/assets/images/VSCode-Light.svg"
            alt=""
            width={imageWidth}
          />
          <h2> VS Code </h2>
        </div>
        <div className="skills__container__box">
          <img
            src="./public/assets/images/React-Light.svg"
            alt="react"
            width={imageWidth}
          />
          <h2> React </h2>
        </div>
        <div className="skills__container__box">
          <img
            src="./public/assets/images/MySQL-Light.svg"
            alt="mysql"
            width={imageWidth}
          />
          <h2> MySQL </h2>
        </div>
        <div className="skills__container__box">
          <img
            src="./public/assets/images/VueJS-Light.svg"
            alt="vuejs"
            width={imageWidth}
          />
          <h2> Vue JS </h2>
        </div>
        <div className="skills__container__box">
          <img
            src="./public/assets/images/Next-Light.svg"
            alt="NextJS"
            width={imageWidth}
          />
          <h2> Next JS </h2>
        </div>
        <div className="skills__container__box">
          <img
            src="./public/assets/images/Material-Light.svg"
            alt="MaterialUI"
            width={imageWidth}
          />
          <h2> Material UI </h2>
        </div>
        <div className="skills__container__box">
          <img
            src="./public/assets/images/Javascript.svg"
            alt="Javascript"
            width={imageWidth}
          />
          <h2> Javascipt </h2>
        </div>
        <div className="skills__container__box">
          <img
            src="./public/assets/images/Git.svg"
            alt="Git"
            width={imageWidth}
          />
          <h2> Git </h2>
        </div>
        <div className="skills__container__box">
          <img
            src="./public/assets/images/Jest.svg"
            alt="Jest"
            width={imageWidth}
          />
          <h2> Jest </h2>
        </div>
        <div className="skills__container__box">
          <img
            src="./public/assets/images/ExpressJS-Light.svg"
            alt="Express"
            width={imageWidth}
          />
          <h2> Express JS </h2>
        </div>
        <div className="skills__container__box">
          <img
            src="./public/assets/images/NodeJS-Light.svg"
            alt="NodeJS"
            width={imageWidth}
          />
          <h2> Node JS </h2>
        </div>
        <div className="skills__container__box">
          <img
            src="./public/assets/images/Sass.svg"
            alt="sass"
            width={imageWidth}
          />
          <h2> Sass </h2>
        </div>
        <div className="skills__container__box">
          <img
            src="./public/assets/images/TypeScript.svg"
            alt="typescript"
            width={imageWidth}
          />
          <h2> Typescript </h2>
        </div>
        <div className="skills__container__box">
          <img
            src="./public/assets/images/Bash-Light.svg"
            alt="bash"
            width={imageWidth}
          />
          <h2> Bash </h2>
        </div>
        <div className="skills__container__box">
          <img
            src="./public/assets/images/HTML.svg"
            alt="html"
            width={imageWidth}
          />
          <h2> HTML </h2>
        </div>
        <div className="skills__container__box">
          <img
            src="./public/assets/images/Angular-Light.svg"
            alt="angular"
            width={imageWidth}
          />
          <h2> Angular </h2>
        </div>
      </div>
    </div>
  );
};

export default Skills;
