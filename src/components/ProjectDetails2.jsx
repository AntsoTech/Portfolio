import React from "react";
import Tag from "./Tag";

const ProjectDetails2 = ({
  title,
  imagename1,
  imagename2,
  description,
  urlGit,
  urlWeb,
  skills,
}) => {
  return (
    <div>
      <div className="projectDetails2">
        <div className="projectDetails2__titles">
          <h1>{title}</h1>
          <div className="projectDetails2__titles__tags">
            {skills &&
              skills.map((skill, index) => (
                <Tag key={index} {...skills} text={skill} />
              ))}
          </div>
          <div className="projectDetails2__titles__description">
            {description}
          </div>
          <div className="projectDetails2__titles__buttons">
            <a href={urlGit} target="_blank" rel="noreferrer">
              <button
                type="button"
                className="projectDetails2__titles__buttons__2"
              >
                <div className="projectDetails2__titles__buttons__2__image">
                  <img src="/assets/images/github.svg" alt="Git" />
                </div>{" "}
                Voir le code
              </button>
            </a>
            <a href={urlWeb} target="_blank" rel="noreferrer">
              <button
                type="button"
                className="projectDetails2__titles__buttons__1"
              >
                Découvrir le site
              </button>
            </a>
          </div>
        </div>
        <div className="projectDetails2__image1">
          <img src={`/assets/images/${imagename1}`} alt={imagename1} />
        </div>
        <div className="projectDetails2__image2">
          <img src={`/assets/images/${imagename2}`} alt={imagename2} />
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails2;
