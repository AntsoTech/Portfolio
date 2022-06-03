import React from "react";
import Fade from "react-reveal/Fade";
import Tag from "./Tag";

const ProjectDetails = ({
  title,
  imagevertical,
  imagehorizontal,
  description,
  url,
}) => {
  return (
    <div>
      <div className="projectDetails">
        <div className="projectDetails__titles">
          <h1>{title}</h1>
          <div className="projectDetails__titles__tags">
            <Tag text="React" />
            <Tag text="Javascript" />
            <Tag text="HTML" />
          </div>
          <div className="projectDetails__titles__description">
            {description}
          </div>
          <button className="projectDetails__titles__button">
            En savoir plus
          </button>
        </div>
        <div className="projectDetails__imagevertical">
          <img
            src={`./public/assets/images/${imagevertical}`}
            alt={imagevertical}
          />
        </div>
        <div className="projectDetails__imagehorizontal">
          <img
            src={`./public/assets/images/${imagehorizontal}`}
            alt={imagehorizontal}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
