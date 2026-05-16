import "./Trending.scss";

const TRENDING_MOVIES = [
  {
    id: 1,
    title: "The Last Horizon",
    genre: "Sci-Fi",
    img: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?q=80&w=500",
  },
  {
    id: 2,
    title: "City of Shadows",
    genre: "Thriller",
    img: "https://images.unsplash.com/photo-1533613220915-609f661a6fe1?q=80&w=500",
  },
  {
    id: 3,
    title: "Silent Night",
    genre: "Horror",
    img: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?q=80&w=500",
  },
  {
    id: 4,
    title: "Golden Era",
    genre: "Drama",
    img: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=500",
  },
];

function Trending() {
  return (
    <section className="trending">
      <div className="trending__content">
        <div className="trending__text-side">
          <h2 className="trending__title">
            Gerade <span className="highlight">angesagt</span>
          </h2>
          <p className="trending__description">
            Verpasse nicht die meistgesehenen Blockbuster der Woche. Vom
            nervenaufreibenden Thriller bis hin zu epischer Science-Fiction –
            entdecke unsere Top-Auswahl, natürlich komplett kostenlos.
          </p>
          <button className="trending__btn-more">Alle Filme ansehen</button>
        </div>

        <div className="trending__grid">
          {TRENDING_MOVIES.map((movie) => (
            <div key={movie.id} className="movie-card">
              <img
                src={movie.img}
                alt={movie.title}
                className="movie-card__img"
              />
              <div className="movie-card__info">
                <span className="movie-card__genre">{movie.genre}</span>
                <h3 className="movie-card__name">{movie.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Trending;
