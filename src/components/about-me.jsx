import React from 'react';
import GusImage from '../img/IMG_7307.jpg';
import { useInView } from 'react-intersection-observer';

const AboutMe = () => {
    const {ref: header, inView: headerVisable } = useInView();
    const {ref: text, inView: textVisable } = useInView();
    const {ref: img, inView: imgVisable } = useInView();

    return (
        <>
            <div id="about-me" className="page">
                <h3 ref={header} className={`content-header ${headerVisable ? "fade-in" : ""}`}>About Me</h3>
                <div className="content-container">
                <div ref={text} className={`text-container ${textVisable ? "fade-in" : ""}`}>
                    <p>Greetings! I'm Matt, a dedicated creator of visually stunning web pages with a lifelong passion for art and graphic design. In response to the challenges posed by the pandemic in 2020, I seized the opportunity to embark on a new journey.</p>
                    <p>My journey into software engineering began with a transformative bootcamp experience, where I quickly became enamored with the process of conceptualizing and constructing web pages. Drawing from my background in art, I've cultivated a keen eye for design, emphasizing cleanliness, responsiveness, and aesthetic appeal in my work. Since then, my dedication to this craft has only deepened.</p>
                    <p>Currently serving as an <span>Assistant Vice President</span> at <span>Bank of America</span>, I leverage my evolving expertise in software engineering daily. Here are a few of the languages I proficiently utilize in my role:</p>
                <ul id="technologies-about-me">
                    <li className="technology">JavaScript</li>
                    <li className="technology">React.js</li>
                    <li className="technology">Vue.js</li>
                    <li className="technology">HTML/HBS</li>
                    <li className="technology">CSS/SCSS</li>
                    <li className="technology">Node.js</li>
                    <li className="technology">MongoDB</li>
                    <li className="technology">SQL</li>
                    <li className="technology">SAFe/Agile</li>
                </ul>
                </div>
                <div id="accent-square"></div>
                <img ref={img} src={GusImage} alt="gus" className={imgVisable ? "fade-in" : ""} />
                </div>
            </div>
        </>
    );
}

export default AboutMe;
