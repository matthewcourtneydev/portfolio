import React from "react";
import ProjectOne from "./cards/featured-project-one";
import ProjectTwo from "./cards/featured-project-two";
import ProjectThree from "./cards/featured-project-three";
import OtherCard from './cards/other-card';
import { useInView } from "react-intersection-observer";

const Portofolio = () => {
  const { ref: header, inView: headerVisable } = useInView();
  
  return (
    <div id="portfolio" className="page">
      <h3
        ref={header}
        className={`content-header ${headerVisable ? "fade-in" : ""}`}
      >
        Portfolio
      </h3>
      <ProjectOne />
      <ProjectTwo />
      <ProjectThree />

      <p className="noteworthy">Other Noteworthy Projects</p>
      <p className="view">View the archive</p>

      <div id="other-container">
       <OtherCard />
       <OtherCard />
       <OtherCard />
       <OtherCard />
       <OtherCard />
       <OtherCard />
      </div>
    </div>
  );
};

export default Portofolio;
