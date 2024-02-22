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

  function sendEmail() {
    window.location = "mailto:mdcdev23@gmail.com?subject=Inquiry About Web Development Services&body=Dear Matthew, %0D%0A %0D%0A I hope this email finds you well. I recently came across your impressive web development portfolio and was thoroughly impressed by the quality and creativity of your work. I am reaching out because I am in need of a skilled web developer for [describe the project or type of work you're interested in]. After reviewing your portfolio, I believe your expertise would be a perfect fit for my project. %0D%0A %0D%0A I would love to discuss the details of the project further and learn more about your availability and rates. Could we schedule a call or meeting to explore this opportunity in more depth? %0D%0A %0D%0A Looking forward to hearing from you soon. Best regards, %0D%0A %0D%0A [Sender's Name] [Sender's Contact Information]";
  }

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
      <button onClick={sendEmail} id="contact-button">Reach Out</button>

      <ul
        ref={icons}
        className={iconsVisable ? "fade-in" : ""}
        id="sm-icon-container-small"
      >
        <li className="sm-icon">
          <a
            href="https://www.linkedin.com/in/matthew-courtney-2854811b5/"
            target="_blank"
          >
            <UilLinkedin />
          </a>
        </li>
        <li className="sm-icon">
          <a
            href="https://www.facebook.com/profile.php?id=61556733748274"
            target="_blank"
          >
            <UilFacebook />
          </a>
        </li>
        <li className="sm-icon">
          <a href="https://github.com/matthewcourtneydev" target="_blank">
            <UilGithub />
          </a>
        </li>
        <li className="sm-icon">
          <a
            href="https://www.instagram.com/mdc_web_development/"
            target="_blank"
          >
            <UilInstagram />
          </a>
        </li>
        <li className="sm-icon">
          <a href="" target="_blank">
            <UilDropbox />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
