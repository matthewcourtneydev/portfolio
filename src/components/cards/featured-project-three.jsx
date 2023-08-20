import React from "react";
import { UilExternalLinkAlt, UilGithubAlt } from '@iconscout/react-unicons'
import { useInView } from "react-intersection-observer";

const ProjectThree = () => {
  const {ref: card, inView: cardVisable } = useInView();

  return (
    <div ref={card} className={`card-container ${cardVisable ? "fade-in" : ""}`}>
      <div className="new-background"></div>
      <div className="project-card" id="project-three">
        <p className="project-label">featured project</p>
        <p className="project-title">Project One Title</p>
        <p className="project-desc">
          A really cool project. I promise once I get back in my groove with
          this portfolio warm up the projects will come. I have a ton of
          projects in the works including a <span>Harry Potter Quiz</span> and{" "}
          <span>Pokedex</span>. Stay tuned to see more.
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

export default ProjectThree;
