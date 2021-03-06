import React from "react";
import { useGlobalContext } from "./context";
import { Link } from "react-router-dom";
import missingImg from "./images/No_picture_available.png";

const Movies = () => {
  const { movies, loading } = useGlobalContext();

  if (loading) {
    return <div className="loading"></div>;
  }

  return (
    <section className="movies">
      {movies.map((movie) => {
        const { imdbID, Poster, Title, Year } = movie;
        return (
          <Link to={`movies/${imdbID}`} key={imdbID} className="movie">
            <article>
              <img src={Poster === "N/A" ? missingImg : Poster} alt={Title} />
              <div className="movie-info">
                <h4 className="title">{Title}</h4>
                <p>{Year}</p>
              </div>
            </article>
          </Link>
        );
      })}
    </section>
  );
};

export default Movies;
