import React from "react";
import {
  UilLinkedin,
  UilFacebook,
  UilInstagram,
  UilGithub,
  UilDropbox,
} from "@iconscout/react-unicons";

const LeftSocialMediaIcons = () => {
  return (
    <>
      <div id="social-media-icons">
        <ul id="social-icons">
          <li className="social-icon">
            <a href="https://www.linkedin.com/in/matthew-courtney-2854811b5/" target="_blank">
            <UilLinkedin />
            </a>
          </li>
          <li className="social-icon">
            <a href="https://www.facebook.com/profile.php?id=61556733748274" target="_blank">
            <UilFacebook />
            </a>
          </li>
          <li className="social-icon">
            <a href="https://github.com/matthewcourtneydev" target="_blank">
            <UilGithub />
            </a>
          </li>
          <li className="social-icon">
            <a href="https://www.instagram.com/mdc_web_development/" target="_blank">
            <UilInstagram />
            </a>
          </li>
          <li className="social-icon">
            <a href="" target="_blank">
            <UilDropbox />
            </a>
          </li>
        </ul>
        <div className="vertical-line-left-side"></div>
      </div>
    </>
  );
};

export default LeftSocialMediaIcons;
