// Axios
import axios from "axios";

// Hooks
import { useState, useEffect } from "react";

// React Router Dom
import { Link, useParams } from "react-router-dom";

const MovieDetailNot = () => {
  const { id } = useParams();

  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const searchId = async () => {
      try {
        const response = await axios.get(`http://localhost:8800/movies/${id}`);
        setMovie(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    searchId();
  }, []);

  return (
    <div>
      <div className="movie-detail">
        <div className="details-container">
          {movie.title && (
            <div className="card-details">
              <h1>{movie.title}</h1>
              <img
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                alt={movie.title}
              />
              <p>
                <span> Visão geral: </span> {movie.overview}
              </p>
            </div>
          )}
        </div>
        <div className="sections-container">
          <h2>Este filme não esta em cartaz!</h2>
          <p className="back-home">
            <Link to="/">Clique aqui</Link> para verificar os filmes que estão
            em cartaz!
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailNot;
