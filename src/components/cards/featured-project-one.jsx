import React from "react";
import { UilExternalLinkAlt, UilGithubAlt } from "@iconscout/react-unicons";
import { useInView } from "react-intersection-observer";

const ProjectOne = () => {
  const {ref: card, inView: cardVisable } = useInView();

  return (
    <div ref={card} className={`card-container ${cardVisable ? "fade-in" : ""}`}>
      <div className="new-background"></div>
      <div className="project-card" id="project-one">
        <p className="project-label">featured project</p>
        <p className="project-title">Project One Title</p>
        <p className="project-desc">
        Exciting projects are on the horizon! Thank you for your patience as I diligently work on crafting high-quality additions to my portfolio. Stay tuned for updates and showcases of my latest work.
        </p>
        
        <ul className="project-tech">
          <li className="tech">React</li>
          <li className="tech">JSX</li>
          <li className="tech">Scss</li>
        </ul>
        <div className="project-links-container">
          <span className="btn">
            <UilExternalLinkAlt />
          </span>
          <span className="btn">
            <UilGithubAlt />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProjectOne;
