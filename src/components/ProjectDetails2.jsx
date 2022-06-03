import React from "react";
import Fade from "react-reveal/Fade";
import Tag from "./Tag";

const ProjectDetails2 = ({
  title,
  imagename1,
  imagename2,
  description,
  url,
}) => {
  return (
    <div>
      <div className="projectDetails2">
        {" "}
        <div className="projectDetails2__titles">
          <h1>{title}</h1>
          <div className="projectDetails2__titles__tags">
            <Tag text="React" />
            <Tag text="Javascript" />
            <Tag text="HTML" />
          </div>
          <div className="projectDetails2__titles__description">
            {description}
          </div>
          <button className="projectDetails2__titles__button">
            En savoir plus
          </button>
        </div>
        <div className="projectDetails2__image1">
          <img src={`./public/assets/images/${imagename1}`} alt={imagename1} />
        </div>
        <div className="projectDetails2__image2">
          <img src={`./public/assets/images/${imagename2}`} alt={imagename2} />
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails2;
