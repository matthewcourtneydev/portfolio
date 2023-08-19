import React from 'react';
import GusImage from '../img/IMG_7307.jpg';

const AboutMe = () => {
    return (
        <>
            <div id="about-me" className="page">
                <h3 className="content-header">About Me</h3>
                <div className="content-container">
                <div className="text-container">
                <p>Hello! My name is Matt and I enjoy creating beautiful web pages. Since I was a child I have had a passion for art and graphic design. When the pandemic struck in 2020 I decided to take the oppertunity to explore a new career path. </p>
                <p>I started my software engineering journey through a bootcamp and quickly fell in love with the process of imagining and building web pages. My interest in art carried over into learning to design clean, responsive and beautiful web pages. Ive been obsessed ever since.</p>
                <p>While I continue to learn everyday here are a handful of languages that I use on a daily basis as an <span>Assistant Vice President</span> at <span>Bank of America</span>.</p>
                <ul id="technologies-about-me">
                    <li className="technology">JavaScript</li>
                    <li className="technology">React.js</li>
                    <li className="technology">Vue.js</li>
                    <li className="technology">Handlesbars</li>
                    <li className="technology">Scss</li>
                    <li className="technology">Node.js</li>
                </ul>
                </div>
                <div id="accent-square"></div>
                <img src={GusImage} alt="gus" />
                </div>
            </div>
        </>
    );
}

export default AboutMe;
