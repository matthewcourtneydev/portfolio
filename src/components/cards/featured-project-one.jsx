import React from "react";
import { UilExternalLinkAlt, UilGithubAlt } from "@iconscout/react-unicons";
import { useInView } from "react-intersection-observer";

const ProjectOne = () => {
  const {ref: card, inView: cardVisable } = useInView();

  return (
    <div ref={card} className={`card-container ${cardVisable ? "fade-in" : ""}`}>
      <div className="new-background">
        <div className="project-img"></div>
      </div>
      <div className="project-card" id="project-one">
        <p className="project-label">featured project</p>
        <p className="project-title">Wordle</p>
        <p className="project-desc">
I created a Wordle application from scratch using React.js, HTML, and SCSS, driven by the goal of showcasing my coding proficiency and problem-solving abilities. This project stands as a testament to my independent approach, deviating from tutorial-based learning to produce a unique and original application.
        </p>
        
        <ul className="project-tech">
          <li className="tech">React</li>
          <li className="tech">JSX</li>
          <li className="tech">Scss</li>
        </ul>
        <div className="project-links-container">
          <span className="btn">
            <a href="https://matthewcourtneydev.github.io/wordle-ui/" target="_blank">
            <UilExternalLinkAlt />
            </a>
          </span>
          <span className="btn">
            <a href="https://github.com/matthewcourtneydev/wordle-ui" target="_blank">
            <UilGithubAlt />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProjectOne;
