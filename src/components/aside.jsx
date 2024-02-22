import React from "react";
import Resume from '../assets/mdc_resume.pdf'

function Aside() {
  const closeSideNav = () => {
    document.querySelector(".nav-side-bar").classList.add("hide");
    document.querySelector("#nav-bar").classList.remove("hide");
  };

  return (
    <nav className="nav-side-bar hide" id="aside-nav">
      <div className="nav-content">
        <div className="exit">
          <span onClick={() => closeSideNav()}>X</span>
        </div>
        <ul className="nav-items">
          <li>
          <span onClick={() => closeSideNav()}><a href="#about-me" alt="about-me">
              About Me
            </a></span>
          </li>
          <li>
            <span onClick={() => closeSideNav()}><a href="#experience" alt="experience">
              Experience
            </a>
            </span>
          </li>
          <li>
            <span onClick={() => closeSideNav()}><a href="#portfolio" alt="portfolio">
              Portfolio
            </a>
            </span>
          </li>
          <li>
            <span onClick={() => closeSideNav()}><a href="#contact" alt="contact">
              Contact
            </a>
            </span>
          </li>
          <a id="resume" href={Resume} target="_blank">
            <li className="resume-button">Resume</li>
          </a>
        </ul>
      </div>
    </nav>
  );
}

export default Aside;
