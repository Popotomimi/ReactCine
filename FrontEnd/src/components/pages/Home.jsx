// Axios
import axios from "axios";

// Hooks
import { useState, useEffect } from "react";

const Home = () => {
  const [movies, setMovies] = useState([{}]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get("http://localhost:8800/movies");
        setMovies(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="background-image">
      <div className="home">
        <h1>Filmes em cartaz</h1>
        <ul>
          {movies.map((movie) => (
            <div key={movie.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
              <h3>Título: {movie.title}</h3>
              <p>Data de lançamento: {movie.release_data}</p>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
