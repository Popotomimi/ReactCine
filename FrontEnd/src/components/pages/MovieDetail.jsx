// Axios
import axios from "axios";

// React-router-dom
import { useParams, Link, useNavigate } from "react-router-dom";

// Hooks
import { useEffect, useState } from "react";

// Context
import { Context } from "../../context/UserContext";
import { useContext } from "react";

// Icons
import { GiAlarmClock } from "react-icons/gi";

const MovieDetail = () => {
  const { authenticated } = useContext(Context);
  let year = new Date();
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const [hour, setHour] = useState("");
  const navigate = useNavigate();

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
  }, [id]);

  const handlePurchase = () => {
    navigate(`/seat-selection/${id}`, { state: { hour } });
  };

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
              <span> Orçamento: </span> R$: {movie.budget}
            </p>
            <p>
              <span> Visão geral: </span> {movie.overview}
            </p>
          </div>
        )}
      </div>
      {authenticated ? (
        <div className="sections-container">
          <h2>
            Seções para: <span>{year.toLocaleDateString()}</span>
          </h2>
          <div className="sections-card">
            <div className="button-controle">
              <button onClick={() => setHour("11:00")}>
                11:00 Hrs <GiAlarmClock />
              </button>
              <button onClick={() => setHour("13:00")}>
                13:00 Hrs <GiAlarmClock />
              </button>
            </div>
            <div className="button-controle">
              <button onClick={() => setHour("15:30")}>
                15:30 Hrs <GiAlarmClock />
              </button>
              <button onClick={() => setHour("18:00")}>
                18:00 Hrs <GiAlarmClock />
              </button>
            </div>
            <div className="button-controle">
              <button onClick={() => setHour("20:30")}>
                20:30 Hrs <GiAlarmClock />
              </button>
              <button onClick={() => setHour("22:00")}>
                22:00 Hrs <GiAlarmClock />
              </button>
            </div>
            <div className="results">
              {hour !== "" ? (
                <p>Agendando Filme para: {hour} Hrs</p>
              ) : (
                <p>Agende seu horário!</p>
              )}
            </div>
            <div className="button-sale">
              <button onClick={handlePurchase}>Comprar</button>
            </div>
          </div>
        </div>
      ) : (
        <div className="authenticated">
          <h2>Você precisa estar logado para comprar ingressos!</h2>
          <p>
            Já possui conta? <Link to="/login">Clique aqui!</Link>{" "}
          </p>
          <p>
            Não tem conta? <Link to="/register">Clique aqui!</Link>{" "}
          </p>
        </div>
      )}
    </div>
  );
};

export default MovieDetail;
