import React from "react";
import {
  UilLinkedin,
  UilFacebook,
  UilInstagram,
  UilGithub,
  UilDropbox,
} from "@iconscout/react-unicons";
import { useInView } from "react-intersection-observer";

const Contact = () => {
  const { ref: header, inView: headerVisable } = useInView();
  const { ref: text, inView: textVisable } = useInView();
  const { ref: icons, inView: iconsVisable } = useInView();

  return (
    <div id="contact" className="page">
      <p
        ref={header}
        className={headerVisable ? "fade-in" : ""}
        id="whats-next"
      >
        04. What's next?
      </p>
      <div ref={text} className={textVisable ? "fade-in" : ""}>
        <p id="get-in-touch">Get in touch!</p>
        <p id="message">
          I would love to hear from you. Whether you have a fun project or an
          interesting job oppertunity, I'm all ears.
        </p>
      </div>
      <button id="contact-button">Reach Out</button>

      <ul
        ref={icons}
        className={iconsVisable ? "fade-in" : ""}
        id="sm-icon-container-small"
      >
        <li className="sm-icon">
          <UilLinkedin />
        </li>
        <li className="sm-icon">
          <UilFacebook />
        </li>
        <li className="sm-icon">
          <UilGithub />
        </li>
        <li className="sm-icon">
          <UilInstagram />
        </li>
        <li className="sm-icon">
          <UilDropbox />
        </li>
      </ul>
    </div>
  );
};

export default Contact;
