import React from "react";

const HomePage = () => {
  return (
    <>
      <div className="page" id="home">
        <div className="content-container">
          <span id="hello">Hello my name is </span>
          <br />
          <span id="name">Matthew Courtney</span>
          <p id="bio">
            I'm a Charlotte based UI Developer with a strong passion for
            building clean responsive webpages. I have extensive knowledge of
            front-end based technologies such as{" "}
            <span>JavaScript, HTML, CSS, React, and Vue.</span> I am currently
            working with Bank of America. Ask me how I can help you see your
            project come to life.
          </p>
        </div>
      </div>
    </>
  );
};

export default HomePage;
