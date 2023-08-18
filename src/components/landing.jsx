import React from "react";

const Landing = () => {
  return (
    <>
      <div className="page" id="landing">
        <div className="content-container">
          <p id="hello">Hello my name is </p>
          <p id="name">Matthew Courtney</p>
          <p id="message">I want to build your websites.</p>
          <p id="bio">
            Im a software engineer specializing in building and occasionally
            designing exceptional digital experiences. I'm currently building
            new and better customer experiences within the merchant services
            division at <span>Bank of America</span>.
          </p>
          <button id="landing-button">Click Me</button>
        </div>
      </div>
    </>
  );
};

export default Landing;
