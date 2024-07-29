// Axios
import axios from "axios";

// Hooks
import { useState, useEffect } from "react";

// React Router Dom
import { useParams, useLocation } from "react-router-dom";

const SeatSelection = () => {
  const { id } = useParams();
  const location = useLocation();
  const hour = location.state?.hour || "Horário não selecionado";

  const [movie, setMovie] = useState([]);

  const rows = ["A", "B", "C", "D", "E"];
  const seatsPerRow = 10;
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatClick = (seat) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

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

  return (
    <div className="seat-selections">
      <h1>Selecione seus assentos para o filme: {movie.title}</h1>
      <p>Horário selecionado: {hour}</p>
      <div className="seats-container">
        {rows.map((row) => (
          <div key={row} className="row">
            {Array.from({ length: seatsPerRow }, (_, index) => {
              const seat = `${row}${index + 1}`;
              return (
                <div
                  key={seat}
                  className={`seat ${
                    selectedSeats.includes(seat) ? "selected" : ""
                  }`}
                  onClick={() => handleSeatClick(seat)}>
                  {seat}
                </div>
              );
            })}
          </div>
        ))}
      </div>
      <div className="screen">Tela</div>
      <div className="selected-seats">
        <h2>Assentos Selecionados:</h2>
        {selectedSeats.length > 0
          ? selectedSeats.join(", ")
          : "Nenhum assento selecionado"}
      </div>
    </div>
  );
};

export default SeatSelection;
