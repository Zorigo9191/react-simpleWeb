import "./Hero.scss";

function Hero() {
  const MOVIE_LINKS = [
    { genre: "Drama", path: "/drama" },
    { genre: "Komödie", path: "/komödie" },
    { genre: "Action", path: "/action" },
    { genre: "Thriller", path: "/thriller" },
    { genre: "Science-Fiction", path: "/Sci-Fi" },
    { genre: "Fantasy", path: "fantasy" },
  ];

  const RenderGenres = () => {
    return MOVIE_LINKS.map((movie) => (
      <button key={movie.genre} className="hero__button">
        {movie.genre}
      </button>
    ));
  };

  return (
    <>
      <section className="hero">
        <div className="hero__titles">
          <h1 className="hero__title"> Crazy Movies</h1>
          <h2 className="hero__subtitle"> Unsere Filme sind kostenlos!</h2>
        </div>

        <div className="hero__buttons">{RenderGenres()}</div>
      </section>
    </>
  );
}

export default Hero;
