import React from 'react';

function Aside() {

    const closeSideNav = () => {
        document.querySelector('.nav-side-bar').classList.add('hide');
        document.querySelector('#nav-bar').classList.remove('hide')
    }

    return (
    <nav className='nav-side-bar hide' id="aside-nav">
        <div className="nav-content">
        <div className="exit">
        <span onClick={() => closeSideNav()}>X</span>
        </div>
        <ul className="nav-items">
            <li><a href="#about-me" alt='about-me'>About Me</a></li>
            <li><a href="#experience" alt="experience">Experience</a></li>
            <li><a href="#portfolio" alt="portfolio">Portfolio</a></li>
            <li><a href="#contact" alt="contact">Contact</a></li>
            <a href="https://docs.google.com/document/d/17opt3I8CcLb9RlvjImX0rZh_OCu8VfmVmiucvmh_AFQ/edit?usp=sharing" target='_blank' rel='noreferrer'><li className='resume-button'>Resume</li></a>
        </ul>
        </div>
    </nav>   
    )
}


export default Aside;