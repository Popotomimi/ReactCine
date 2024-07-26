// Axios
import axios from "axios";

// React-router-dom
import { useParams } from "react-router-dom";

// Hooks
import { useEffect, useState } from "react";

// Icons
import { GiAlarmClock } from "react-icons/gi";

const MovieDetail = () => {
  let year = new Date();

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
              {" "}
              <span> Orçamento: </span> R$: {movie.budget}
            </p>
            <p>
              <span> Visão geral: </span> {movie.overview}
            </p>
          </div>
        )}
      </div>
      <div className="sections-container">
        <h2>Seções para: {year.toLocaleDateString()}</h2>
        <div className="sections-card">
          <div className="button-controle">
            <button>
              11:00 Hrs <GiAlarmClock />{" "}
            </button>
            <button>
              13:00 Hrs <GiAlarmClock />{" "}
            </button>
          </div>
          <div className="button-controle">
            <button>
              15:30 Hrs <GiAlarmClock />{" "}
            </button>
            <button>
              18:00 Hrs <GiAlarmClock />{" "}
            </button>
          </div>
          <div className="button-controle">
            <button>
              20:30 Hrs <GiAlarmClock />{" "}
            </button>
            <button>
              22:00 Hrs <GiAlarmClock />{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
