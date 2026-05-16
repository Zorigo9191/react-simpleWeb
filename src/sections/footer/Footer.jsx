import "./Footer.scss";
import { FaInstagram, FaTwitter, FaYoutube, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__logo">
          Crazy <span>Movies</span>
        </div>

        <div className="footer__socials">
          <a href="#" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="#" aria-label="Twitter">
            <FaTwitter />
          </a>
          <a href="#" aria-label="YouTube">
            <FaYoutube />
          </a>
          <a href="#" aria-label="GitHub">
            <FaGithub />
          </a>
        </div>

        <div className="footer__copyright">
          <p>
            &copy; {new Date().getFullYear()} Crazy Movies. Alle Rechte
            vorbehalten.
          </p>
          <div className="footer__links">
            <a href="#">Datenschutz</a>
            <a href="#">Impressum</a>
          </div>
        </div>
      </div>
      <div className="footer__glow"></div>
    </footer>
  );
}

export default Footer;
