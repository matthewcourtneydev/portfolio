import React from 'react';
import { UilLinkedin, UilFacebook,  UilInstagram, UilGithub, UilDropbox } from '@iconscout/react-unicons'

const LeftSocialMediaIcons = () => {
    return (
        <>
        <div id="social-media-icons">
            <ul id="social-icons">
            <li className="social-icon"><UilLinkedin /></li>
                <li className="social-icon"><UilFacebook /></li>
                <li className="social-icon"><UilGithub /></li>
                <li className="social-icon"><UilInstagram /></li>
                <li className="social-icon"><UilDropbox /></li>
            </ul>
            <div className="vertical-line-left-side"></div>
        </div>
        </>
    );
}

export default LeftSocialMediaIcons;
