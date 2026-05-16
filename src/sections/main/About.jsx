import "./About.scss";

function About() {
  return (
    <section className="about" id="about">
      <div className="about__container">
        <div className="about__image-wrapper">
          <div className="about__glow-circle"></div>
          <img
            src="/src/assets/about.jpg"
            alt="About Us"
            className="about__img"
          />
        </div>

        <div className="about__content">
          <h2 className="about__title">
            Mehr als nur <span className="highlight">Pixel.</span>
          </h2>
          <p className="about__text">
            Bei <strong>Crazy Movies</strong> glauben wir, dass großartige
            Geschichten nichts kosten sollten. Wir sind ein Kollektiv von
            Film-Enthusiasten, die die besten Klassiker und Independent-Perlen
            an einem Ort versammeln.
          </p>
          <div className="about__stats">
            <div className="about__stat-item">
              <span className="about__stat-number">500+</span>
              <span className="about__stat-label">Filme</span>
            </div>
            <div className="about__stat-item">
              <span className="about__stat-number">24/7</span>
              <span className="about__stat-label">Streaming</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
