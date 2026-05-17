import React from "react";

import aboutImg from "../../assets/about.jpg";

function About() {
  return (
    <section className="about" id="about">
      <div className="about__container">
        <div className="about__image-wrapper">
          <div className="about__glow-circle"></div>

          <img src={aboutImg} alt="About Us" className="about__img" />
        </div>
      </div>
    </section>
  );
}

export default About;
