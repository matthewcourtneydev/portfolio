import React from "react";
import { useInView } from "react-intersection-observer";

const Landing = () => {
  const { ref: hello, inView: isHelloVisable } = useInView();
  const { ref: name, inView: isNameVisable } = useInView();
  const { ref: message, inView: isMessageVisable } = useInView();
  const { ref: bio, inView: isBioVisable } = useInView();
  const { ref: landingBtn, inView: isLandingBtnVisable } = useInView();

  return (
    <>
      <div className="page" id="landing">
        <div className="content-container">
          <h4
            ref={hello}
            className={isHelloVisable ? "fade-in" : ""}
            id="hello"
          >
            Hello my name is{" "}
          </h4>
          <h4 ref={name} className={isNameVisable ? "fade-in" : ""} id="name">
            Matthew Courtney.
          </h4>
          <h4
            ref={message}
            className={isMessageVisable ? "fade-in" : ""}
            id="message"
          >
            I like to build websites.
          </h4>
          <h4 ref={bio} className={isBioVisable ? "fade-in" : ""} id="bio">
            As a software engineer, I specialize in crafting and occasionally
            designing exceptional digital experiences. Presently, I'm dedicated
            to enhancing customer experiences within the Merchant Services
            division at <span>Bank of America</span> by developing innovative
            solutions that elevate user interactions and streamline processes.
          </h4>
          <a href="#contact">
            <button
              ref={landingBtn}
              className={isLandingBtnVisable ? "fade-in" : ""}
              id="landing-button"
              href="#contact"
            >
              Let's Connect
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Landing;
