import React from 'react';
import { UilGithub, UilLinkedin, UilEnvelope  } from '@iconscout/react-unicons'

const LeftSocialMediaIcons = () => {
    return (
        <>
        <div id="social-media-icons">
            <ul id="social-icons">
                <li className="social-icon"><UilGithub size={40}/></li>
                <li className="social-icon"><UilLinkedin size={40}/></li>
                <li className="social-icon"><UilEnvelope size={40}/></li>
            </ul>
            <div className="vertical-line-left-side"></div>
        </div>
        </>
    );
}

export default LeftSocialMediaIcons;
