import React from "react";

const VerticalBar = () => {
  return (
    <div className="verticalbar">
      <div className="verticalbar__logos">
        <a
          href="https://www.linkedin.com/in/arakotoson/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="/assets/images/linkedin.svg"
            alt="Linkedin Antso"
            width="24px"
            className="verticalbar__logos__link"
          />
        </a>
        <a
          href="https://www.instagram.com/antso_rk/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="/assets/images/insta.svg"
            alt="Instagram Antso"
            width="24px"
            className="verticalbar__logos__link"
          />
        </a>
        <a href="https://github.com/AntsoTech" target="_blank" rel="noreferrer">
          <img
            src="/assets/images/github.svg"
            alt="Github Antso"
            width="24px"
            className="verticalbar__logos__link"
          />
        </a>
        <a
          href="https://www.fichier-pdf.fr/2022/06/13/antsorakotosoncvdevjsreactfullstack/antsorakotosoncvdevjsreactfullstack.pdf"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="/assets/images/cv.svg"
            alt="CV Antso"
            width="24px"
            className="verticalbar__logos__link"
            href=""
          />
        </a>
      </div>
      <div className="verticalbar__line" />
    </div>
  );
};

export default VerticalBar;
