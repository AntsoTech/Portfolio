import React from "react";
import Fade from "react-reveal/Fade";
import Tag from "./Tag";
/* eslint react/prop-types: 0 */

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
        <Fade top cascade fraction={0.3}>
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
            <a href={url} target="_blank" rel="noreferrer">
              <button type="button" className="projectDetails2__titles__button">
                En savoir plus
              </button>
            </a>
          </div>
        </Fade>
        <Fade bottom fraction={0.4} delay={200} distance="150px">
          <div className="projectDetails2__image1">
            <img
              src={`./public/assets/images/${imagename1}`}
              alt={imagename1}
            />
          </div>
        </Fade>
        <Fade bottom fraction={0.4} delay={800} distance="150px">
          <div className="projectDetails2__image2">
            <img
              src={`./public/assets/images/${imagename2}`}
              alt={imagename2}
            />
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default ProjectDetails2;
