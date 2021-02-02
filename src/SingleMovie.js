import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { API_ENDPOINT } from "./context";
const missingImg =
  "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";

const SingleMovie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({ show: false, message: "" });

  const fetchMovie = async (url) => {
    const response = await fetch(url);
    const data = await response.json();

    if (data.Response === "False") {
      setError({ show: true, message: data.Error });
      setLoading(false);
    } else {
      setMovie(data);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovie(`${API_ENDPOINT}&i=${id}`);
  }, [id]);

  if (loading) {
    return <div className="loading"></div>;
  }

  if (error.show) {
    return (
      <div className="page-error">
        <h1>{error.message}</h1>
        <Link to="/" className="btn">
          Back to search
        </Link>
      </div>
    );
  }

  const { Poster, Title, Plot, Director, Released } = movie;

  return (
    <section className="single-movie">
      <img src={Poster === "N/A" ? missingImg : Poster} alt={Title} />
      <div className="single-movie-info">
        <h2>{Title}</h2>
        <h3>Directed by {Director}</h3>
        <h4>Released on {Released}</h4>
        <p>{Plot}</p>
        <Link to="/" className="btn">
          Back to search
        </Link>
      </div>
    </section>
  );
};

export default SingleMovie;
