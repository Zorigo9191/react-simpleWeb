import "./Features.scss";

import {
  FaVideo,
  FaMobileAlt,
  FaCloudDownloadAlt,
  FaInfinity,
} from "react-icons/fa";

function Features() {
  const FEATURE_DATA = [
    {
      icon: <FaVideo />,
      title: "4K Ultra HD",
      desc: "Erlebe Filme in schärfster Auflösung, optimiert für dein Heimkino.",
    },
    {
      icon: <FaInfinity />,
      title: "Unbegrenzt",
      desc: "Keine versteckten Kosten. Streame so viel du willst, wann du willst.",
    },
    {
      icon: <FaMobileAlt />,
      title: "Mobile App",
      desc: "Nimm deine Lieblingsfilme überall hin mit. Optimiert für iOS & Android.",
    },
    {
      icon: <FaCloudDownloadAlt />,
      title: "Offline-Modus",
      desc: "Lade Filme herunter und schaue sie ohne Internetverbindung.",
    },
  ];

  return (
    <section className="features">
      <div className="features__header">
        <h2 className="features__title">Warum Crazy Movies?</h2>
        <p className="features__subtitle">
          Wir setzen neue Standards für kostenloses Entertainment.
        </p>
      </div>

      <div className="features__grid">
        {FEATURE_DATA.map((item, index) => (
          <div className="features__card" key={index}>
            <div className="features__icon">{item.icon}</div>
            <h3 className="features__card-title">{item.title}</h3>
            <p className="features__card-text">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
