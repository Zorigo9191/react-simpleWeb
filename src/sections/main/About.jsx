import React from "react";

function About() {
  return (
    <section className="about" id="about">
      <div className="about__container">
        <div className="about__image-wrapper">
          <img
            src="/src/assets/about.jpg"
            alt="About Us"
            className="about__img"
          />
        </div>

        <div className="about__content">
          <h2 className="about__title">
            Über <span className="highlight">Uns</span>
          </h2>
          <p className="about__text">
            Hier kommt dein Beschreibungstext hin. Sobald dieser Block
            existiert, rutscht das Bild automatisch auf die linke Seite und wird
            kleiner.
          </p>

          <div className="about__stats">
            <div className="about__stat-item">
              <span className="about__stat-number">5+</span>
              <span className="about__stat-label">Jahre Erfahrung</span>
            </div>
            <div className="about__stat-item">
              <span className="about__stat-number">50+</span>
              <span className="about__stat-label">Projekte</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
