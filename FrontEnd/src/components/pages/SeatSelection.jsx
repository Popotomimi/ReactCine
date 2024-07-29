// Axios
import axios from "axios";

// Hooks
import { useState, useEffect } from "react";

// React Router Dom
import { useParams, useLocation } from "react-router-dom";

// Message
import { toast } from "react-toastify";

// Img
import QrcodeImg from "../../assets/img/qrcode.jfif";

const SeatSelection = () => {
  const { id } = useParams();
  const location = useLocation();
  const hour = location.state?.hour || "Horário não selecionado";

  const [movie, setMovie] = useState([]);
  const [total, setTotal] = useState(0);
  const [qrcode, setQrcode] = useState(false);

  const rows = ["A", "B", "C", "D", "E"];
  const seatsPerRow = 10;
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatClick = (seat) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seat));
      setTotal(total - 33.9);
    } else {
      setSelectedSeats([...selectedSeats, seat]);
      setTotal(total + 33.9);
    }
  };

  const handleFinaly = () => {
    if (total === 0) {
      toast.warn("Escolha os acentos antes de finalizar!");
      return;
    }

    setQrcode(true);
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

  useEffect(() => {
    if (total < 0) {
      setTotal(0);
    }
  }, [total]);

  return (
    <div className="seat-selections">
      <div className="bkg-img-seat"></div>
      <h1>Selecione seus assentos para o filme: {movie.title}</h1>
      <p className="hours">
        Horário selecionado: <span>{hour}</span>
      </p>
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
        <h2 className="hours">Assentos Selecionados:</h2>
        {selectedSeats.length > 0
          ? selectedSeats.join(", ")
          : "Nenhum assento selecionado!"}
      </div>
      <div className="hours">
        <p>
          Valor total R$: <span> {total.toFixed(2)}</span>
        </p>
      </div>
      <div className="qrcode">
        <button className="btn-finaly" onClick={handleFinaly}>
          Comprar
        </button>
        {qrcode && (
          <>
            <h3>Pague pelo QRCODE e receba os ingressos por e-mail!</h3>
            <img src={QrcodeImg} alt="Image do QR-Code" />
          </>
        )}
      </div>
    </div>
  );
};

export default SeatSelection;
