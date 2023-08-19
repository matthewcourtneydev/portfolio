import React from 'react';
import ProjectOne from './cards/project-one';
import ProjectTwo from './cards/project-two';
import ProjectThree from './cards/project-three';

const Portofolio = () => {
    return (
        <div id="portfolio" className="page">
            <h3 className="content-header">Portfolio</h3>
            <ProjectOne />
            <ProjectTwo />
            <ProjectThree />
        </div>
    );
}

export default Portofolio;
