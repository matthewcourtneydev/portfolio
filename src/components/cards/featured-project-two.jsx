import React from "react";
import { UilExternalLinkAlt, UilGithubAlt } from "@iconscout/react-unicons";
import { useInView } from "react-intersection-observer";

const ProjectTwo = () => {
  const { ref: card, inView: cardVisable } = useInView();

  return (
    <div
      ref={card}
      className={`card-container ${cardVisable ? "fade-in" : ""}`}
    >
      <div className="new-background">
        <div className="project-img2"></div>
      </div>
      <div className="project-card" id="project-two">
        <p className="project-label">featured project</p>
        <p className="project-title">Sorting Hat Quiz</p>
        <p className="project-desc">
          I created an engaging Sorting Hat Quiz using React.js, where users are
          dynamically sorted into Hogwarts houses based on their responses to
          tailored questions, drawing inspiration from the renowned Sorting Hat
          of the Wizarding World.
        </p>
        <ul className="project-tech">
          <li className="tech">React</li>
          <li className="tech">JSX</li>
          <li className="tech">Scss</li>
        </ul>
        <div className="project-links-container">
          <span className="btn">
            <a
              href="https://matthewcourtneydev.github.io/sorting-hat-quiz/"
              target="_blank"
            >
              <UilExternalLinkAlt />
            </a>
          </span>
          <span className="btn">
            <a
              href="https://github.com/matthewcourtneydev/sorting-hat-quiz"
              target="_blank"
            >
              <UilGithubAlt />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProjectTwo;
