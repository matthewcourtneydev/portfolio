import React from "react";

const Landing = () => {
  return (
    <>
      <div className="page" id="landing">
        <div className="content-container">
          <h4 id="hello">Hello my name is </h4>
          <h4 id="name">Matthew Courtney.</h4>
          <h4 id="message">I like to build websites.</h4>
          <h4 id="bio">
            Im a software engineer specializing in building and occasionally
            designing exceptional digital experiences. I'm currently building
            new and better customer experiences within the merchant services
            division at <span>Bank of America</span>.
          </h4>
          <button id="landing-button">Click Me</button>
        </div>
      </div>
    </>
  );
};

export default Landing;
