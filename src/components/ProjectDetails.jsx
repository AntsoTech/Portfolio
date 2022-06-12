import React from "react";
import Fade from "react-reveal/Fade";
import Tag from "./Tag";
/* eslint react/prop-types: 0 */

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
        <Fade top cascade fraction={0.3}>
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
            <a href={url} target="_blank" rel="noreferrer">
              <button type="button" className="projectDetails__titles__button">
                En savoir plus
              </button>
            </a>
          </div>
        </Fade>
        <Fade bottom fraction={0.4} delay={200} distance="150px">
          <div className="projectDetails__imagevertical">
            <img src={`/assets/images/${imagevertical}`} alt={imagevertical} />
          </div>
          <div className="projectDetails__imagehorizontal">
            <img
              src={`/assets/images/${imagehorizontal}`}
              alt={imagehorizontal}
            />
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default ProjectDetails;
