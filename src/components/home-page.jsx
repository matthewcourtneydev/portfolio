import React from 'react';

const HomePage = () => {
    return (
        <section className="intro-page">
          <div className="parent-container">
            <div className="main-container">
              <p
                className="hello"
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-once="true"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
              >
                Hi my name is
              </p>
              <h1
                className="name"
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-once="true"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
              >
                Matthew Courtney
              </h1>
              <h2
                className="job"
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-once="true"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
              >
                Im a Front End Developer
              </h2>
              <p
                className="biography"
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="300"
                data-aos-once="true"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
              >
                I'm a Charlotte based UI Developer with a strong passion for
                building clean responsive webpages. I have extensive knowledge of
                front-end based technologies such as{" "}
                <span className="orange">
                  JavaScript, HTML, CSS, React, and Vue.
                </span>{" "}
                I am currently working with Bank of America. Ask me how I can help
                you see your project come to life.{" "}
              </p>
            </div>
          </div>
        </section>
      );
}

export default HomePage;
