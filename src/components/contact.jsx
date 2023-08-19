import React from 'react';
import { UilLinkedin, UilFacebook,  UilInstagram, UilGithub, UilDropbox } from '@iconscout/react-unicons'

const Contact = () => {
    return (
        <div id="contact" className="page">
            <p id="whats-next">04. What's next?</p>
            <p id="get-in-touch">Get in touch!</p>
            <p id="message">I would love to hear from you. Whether you have a fun project or an interesting job oppertunity, I'm all ears.</p>
        
            <button id="contact-button">Reach Out</button>

            <ul id="sm-icon-container-small">
                <li className="sm-icon"><UilLinkedin /></li>
                <li className="sm-icon"><UilFacebook /></li>
                <li className="sm-icon"><UilGithub /></li>
                <li className="sm-icon"><UilInstagram /></li>
                <li className="sm-icon"><UilDropbox /></li>
            </ul>
        </div>
    );
}

export default Contact;
