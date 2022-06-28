import React from "react";
import Tag from "./Tag";

const ProjectDetails = ({
  title,
  imagevertical,
  imagehorizontal,
  description,
  urlGit,
  urlWeb,
  skills,
}) => {
  return (
    <div>
      <div className="projectDetails">
        <div className="projectDetails__titles">
          <h1>{title}</h1>
          <div className="projectDetails__titles__tags">
            {skills &&
              skills.map((skill, index) => (
                <Tag key={index} {...skills} text={skill} />
              ))}
          </div>
          <div className="projectDetails__titles__description">
            {description}
          </div>
          <div className="projectDetails__titles__buttons">
            <a href={urlGit} target="_blank" rel="noreferrer">
              <button
                type="button"
                className="projectDetails__titles__buttons__2"
              >
                <div className="projectDetails__titles__buttons__2__image">
                  <img src="/assets/images/github.svg" alt="Git" />
                </div>{" "}
                Voir le code
              </button>
            </a>
            <a href={urlWeb} target="_blank" rel="noreferrer">
              <button
                type="button"
                className="projectDetails__titles__buttons__1"
              >
                En savoir plus
              </button>
            </a>
          </div>
        </div>
        <div className="projectDetails__imagevertical">
          <img src={`/assets/images/${imagevertical}`} alt={imagevertical} />
        </div>
        <div className="projectDetails__imagehorizontal">
          <img
            src={`/assets/images/${imagehorizontal}`}
            alt={imagehorizontal}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
