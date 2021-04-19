import React from "react";
import aboutimage1 from "../images/about.png";
import aboutimage2 from "../images/abouthead.png";

function About() {
  return (
    <div id="about">
      <div className="about-image">
        <img src={aboutimage1} alt="" />
      </div>
      <div className="about-text">
        <img src={aboutimage2} alt="" />
        <p>
          At the School of Calisthenics we provide calisthenics programmes and
          training workouts to help you explore your physical potential; move
          better, get strong and have more fun with your training.
          <br/>
          <br/>
          We have a range of ways to help you start or continue your
          calisthenics journey. From learning online at your own pace, getting
          some extra support with our personalised online coaching packages or
          coming to see us face-to-face at a calisthenics workshop, retreat or
          class.
        </p>
        <a href="#" className="about-btn btn-link">Find Out More</a>
      </div>
    </div>
  );
}

export default About;
