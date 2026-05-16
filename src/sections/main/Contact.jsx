import { useState } from "react";
import "./Contact.scss";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formular abgesendet:", formData);
    alert("Vielen Dank! Deine Nachricht wurde (simuliert) gesendet.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="contact" id="kontakt">
      <div className="contact__container">
        <div className="contact__info-side">
          <h2 className="contact__title">
            Schreib uns eine <span className="highlight">Nachricht</span>
          </h2>
          <p className="contact__description">
            Hast du Fragen, Feedback oder Wünsche für neue Filme? Unser Team ist
            rund um die Uhr für dich da. Melde dich einfach bei uns!
          </p>

          <div className="contact__details">
            <div className="contact__detail-item">
              <div className="contact__icon">
                <FaEnvelope />
              </div>
              <div>
                <h4>E-Mail</h4>
                <p>support@crazymovies.de</p>
              </div>
            </div>
            <div className="contact__detail-item">
              <div className="contact__icon">
                <FaPhoneAlt />
              </div>
              <div>
                <h4>Telefon</h4>
                <p>+49 (0) 123 456 789</p>
              </div>
            </div>
            <div className="contact__detail-item">
              <div className="contact__icon">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h4>Standort</h4>
                <p>Kinoallee 42, 919199 Beispielstadt</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact__form-side">
          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="contact__input-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Dein Name"
                required
              />
            </div>

            <div className="contact__input-group">
              <label htmlFor="email">E-Mail-Adresse</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="deine@email.de"
                required
              />
            </div>

            <div className="contact__input-group">
              <label htmlFor="message">Deine Nachricht</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Wie können wir dir helfen?"
                rows="5"
                required
              ></textarea>
            </div>

            <button type="submit" className="contact__btn-submit">
              Nachricht senden
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
