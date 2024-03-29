import React from "react";
import ProjectOne from "./cards/featured-project-one";
import ProjectTwo from "./cards/featured-project-two";
import ProjectThree from "./cards/featured-project-three";
import OtherCard from "./cards/other-card";
import { useInView } from "react-intersection-observer";

const Portofolio = () => {
  const { ref: header, inView: headerVisable } = useInView();

  const projects = [
    {
      title: "Props Demo",
      description:
        "I developed a React app to aid my brother's comprehension of props, including their passing and updating. Considering its potential to benefit others, I plan to make the project publicly available.",
      techOne: "React",
      techTwo: "HTML",
      techThree: "CSS",
    },
  ];

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
        {/* Will iterate ver once more secondary projects are complete */}
        <OtherCard projectData={projects[0]} />
        <OtherCard projectData={projects[0]} />
        <OtherCard projectData={projects[0]} />
        <OtherCard projectData={projects[0]} />
        <OtherCard projectData={projects[0]} />
        <OtherCard projectData={projects[0]} />
      </div>
    </div>
  );
};

export default Portofolio;
