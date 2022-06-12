import React from "react";

const VerticalBar = () => {
  return (
    <div className="verticalbar">
      <div className="verticalbar__logos">
        <img
          src="/assets/images/linkedin.svg"
          alt="Linkedin Antso"
          width="24px"
          className="verticalbar__logos__link"
        />
        <img
          src="/assets/images/insta.svg"
          alt="Instagram Antso"
          width="24px"
          className="verticalbar__logos__link"
        />
        <img
          src="/assets/images/github.svg"
          alt="Github Antso"
          width="24px"
          className="verticalbar__logos__link"
        />
        <img
          src="/assets/images/cv.svg"
          alt="CV Antso"
          width="24px"
          className="verticalbar__logos__link"
        />
      </div>
      <div className="verticalbar__line" />
    </div>
  );
};

export default VerticalBar;
