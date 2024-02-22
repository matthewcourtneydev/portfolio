import React from "react";
import { UilFolder, UilLocationArrow } from "@iconscout/react-unicons";
import { useInView } from "react-intersection-observer";

const OtherCard = () => {
  const { ref: card, inView: cardVisable } = useInView();

  return (
    <div ref={card} className={`other-card ${cardVisable ? "fade-in" : ""}`}>
      <div className="button-container">
        <a href="#" className="folder">
          <UilFolder />
        </a>
        <a className="deployed-link">
          <UilLocationArrow />
        </a>
      </div>
      <other className="title">Project Title</other>
      <div className="description">
      Exciting projects are on the horizon! Thank you for your patience as I diligently work on crafting high-quality additions to my portfolio. Stay tuned for updates and showcases of my latest work.
      </div>
      <ul className="tech-stack">
        <li className="tech">React</li>
        <li className="tech">Node</li>
        <li className="tech">Scss</li>
      </ul>
    </div>
  );
};

export default OtherCard;
