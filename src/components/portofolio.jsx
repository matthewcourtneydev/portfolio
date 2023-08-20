import React from "react";
import { UilFolder, UilLocationArrow } from '@iconscout/react-unicons'
import ProjectOne from "./cards/featured-project-one";
import ProjectTwo from "./cards/featured-project-two";
import ProjectThree from "./cards/featured-project-three";

const Portofolio = () => {
  return (
    <div id="portfolio" className="page">
      <h3 className="content-header">Portfolio</h3>
      <ProjectOne />
      <ProjectTwo />
      <ProjectThree />

      <p className="noteworthy">Other Noteworthy Projects</p>
      <p className="view">View the archive</p>

      <div id="other-container">
        <div className="other-card">
            <div className="button-container">
                <a href="#" className="folder"><UilFolder /></a>
                <a className="deployed-link"><UilLocationArrow /></a>
            </div>
            <other className="title">Project Title</other>
            <div className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur deleniti porro, voluptatem illo quod amet laudantium animi nobis totam repudiandae eum optio. Libero quis sunt, obcaecati inventore aliquam non at?</div>
            <ul className="tech-stack">
                <li className="tech">React</li>
                <li className="tech">Node</li>
                <li className="tech">Scss</li>
            </ul>
        </div>
        <div className="other-card">
            <div className="button-container">
                <a href="#" className="folder"><UilFolder /></a>
                <a className="deployed-link"><UilLocationArrow /></a>
            </div>
            <other className="title">Project Title</other>
            <div className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur deleniti porro, voluptatem illo quod amet laudantium animi nobis totam repudiandae eum optio. Libero quis sunt, obcaecati inventore aliquam non at?</div>
            <ul className="tech-stack">
                <li className="tech">React</li>
                <li className="tech">Node</li>
                <li className="tech">Scss</li>
            </ul>
        </div>
        <div className="other-card">
            <div className="button-container">
                <a href="#" className="folder"><UilFolder /></a>
                <a className="deployed-link"><UilLocationArrow /></a>
            </div>
            <other className="title">Project Title</other>
            <div className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur deleniti porro, voluptatem illo quod amet laudantium animi nobis totam repudiandae eum optio. Libero quis sunt, obcaecati inventore aliquam non at?</div>
            <ul className="tech-stack">
                <li className="tech">React</li>
                <li className="tech">Node</li>
                <li className="tech">Scss</li>
            </ul>
        </div>
        <div className="other-card">
            <div className="button-container">
                <a href="#" className="folder"><UilFolder /></a>
                <a className="deployed-link"><UilLocationArrow /></a>
            </div>
            <other className="title">Project Title</other>
            <div className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur deleniti porro, voluptatem illo quod amet laudantium animi nobis totam repudiandae eum optio. Libero quis sunt, obcaecati inventore aliquam non at?</div>
            <ul className="tech-stack">
                <li className="tech">React</li>
                <li className="tech">Node</li>
                <li className="tech">Scss</li>
            </ul>
        </div>
        <div className="other-card">
            <div className="button-container">
                <a href="#" className="folder"><UilFolder /></a>
                <a className="deployed-link"><UilLocationArrow /></a>
            </div>
            <other className="title">Project Title</other>
            <div className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur deleniti porro, voluptatem illo quod amet laudantium animi nobis totam repudiandae eum optio. Libero quis sunt, obcaecati inventore aliquam non at?</div>
            <ul className="tech-stack">
                <li className="tech">React</li>
                <li className="tech">Node</li>
                <li className="tech">Scss</li>
            </ul>
        </div>
        <div className="other-card">
            <div className="button-container">
                <a href="#" className="folder"><UilFolder /></a>
                <a className="deployed-link"><UilLocationArrow /></a>
            </div>
            <other className="title">Project Title</other>
            <div className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur deleniti porro, voluptatem illo quod amet laudantium animi nobis totam repudiandae eum optio. Libero quis sunt, obcaecati inventore aliquam non at?</div>
            <ul className="tech-stack">
                <li className="tech">React</li>
                <li className="tech">Node</li>
                <li className="tech">Scss</li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default Portofolio;
