import React from 'react';
import { UilApple, UilBars } from "@iconscout/react-unicons";

function Navbar() {

    const toggleSideNav = () => {
        console.log('Hamburger Clicked');
        document.querySelector('.nav-content').classList.add('nav-content-slide')
        document.querySelector('.nav-side-bar').classList.remove('hide');

    }

    return (
    <nav id='nav-bar'>
        <span id="logo"><a href="#"><UilApple size={40}/></a></span>
        <div id='bars'><UilBars onClick={() => toggleSideNav()}/></div>
        <ul id="nav-items">
            <li className="nav-item"><a href="#about-me" alt='about-me'>About Me</a></li>
            <li className="nav-item"><a href="#experience" alt="experience">Experience</a></li>
            <li className="nav-item"><a href="#portfolio" alt="portfolio">Portfolio</a></li>
            <li className="nav-item"><a href="#contact" alt="contact">Contact</a></li>
            <a id="resume" href="https://docs.google.com/document/d/17opt3I8CcLb9RlvjImX0rZh_OCu8VfmVmiucvmh_AFQ/edit?usp=sharinghttps://docs.google.com/document/d/17opt3I8CcLb9RlvjImX0rZh_OCu8VfmVmiucvmh_AFQ/edit?usp=sharing" target='_blank' rel='noreferrer'><li className='resume-button'>Resume</li></a>
        </ul>
    </nav>   
    )
}


export default Navbar;