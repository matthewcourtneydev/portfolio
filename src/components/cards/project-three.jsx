import React from 'react';

const ProjectThree = () => {
    return (
        <div className="project-card" id="project-three">
            <p className="project-label">featured project</p>
            <p className="project-title">Project One Title</p>
            <p className="project-desc">A really cool project. I promise once I get back in my groove with this portfolio warm up the projects will come. I have a ton of projects in the works including a <span>Harry Potter Quiz</span> and <span>Pokedex</span>. Stay tuned to see more.</p>
            <ul className="project-tech">
                <li className="tech">React</li>
                <li className="tech">JSX</li>
                <li className="tech">Scss</li>
            </ul>
            <div className="project-links-container">
                <span className="btn">X</span>
                <span className="btn">X</span>
            </div>
        </div>
    );
}

export default ProjectThree;
