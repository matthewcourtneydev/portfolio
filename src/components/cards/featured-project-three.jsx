import React from "react";
import { UilExternalLinkAlt, UilGithubAlt } from "@iconscout/react-unicons";
import { useInView } from "react-intersection-observer";

const ProjectThree = () => {
  const { ref: card, inView: cardVisable } = useInView();

  return (
    <div
      ref={card}
      className={`card-container ${cardVisable ? "fade-in" : ""}`}
    >
      <div className="new-background">
        <div className="project-img3"></div>
      </div>
      <div className="project-card" id="project-three">
        <p className="project-label">featured project</p>
        <p className="project-title">Weather App</p>
        <p className="project-desc">
          Exciting projects are on the horizon! Thank you for your patience as I
          React weather app offering precise forecasts based on your location,
          whether you input your city or use geolocation. With sleek design and
          detailed data, including current conditions in Fahrenheit/mph for the
          US and Celsius/kph for Canada, a 7-day forecast, UV index, wind speed,
          precipitation, humidity, and dynamic weather images,
        </p>
        <ul className="project-tech">
          <li className="tech">React</li>
          <li className="tech">JSX</li>
          <li className="tech">Scss</li>
        </ul>
        <div className="project-links-container">
          <span className="btn">
            <a href="https://matthewcourtneydev.github.io/aeolus-app/">
              <UilExternalLinkAlt />
            </a>
          </span>
          <span className="btn">
            <a href="https://github.com/matthewcourtneydev/aeolus-app">
              <UilGithubAlt />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProjectThree;
