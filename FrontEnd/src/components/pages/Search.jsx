// Axios
import axios from "axios";

// Hooks
import { useState } from "react";

// Icons
import { CgSearchLoading } from "react-icons/cg";

// React Toastify
import { toast } from "react-toastify";

const Search = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `http://localhost:8800/movies/search?query=${search}`
      );
      setResults(response.data.results);
      toast.success(`Resultado da pesquisa: ${search}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="search">
      <h1>Pesquise seu filme:</h1>
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="form-control">
          <label>Pesquise Aqui:</label>
          <input
            type="text"
            placeholder="Digite o nome do filme"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <button type="submit">
          Pesquisar <CgSearchLoading />{" "}
        </button>
      </form>
      <ul className="movie-container">
        {results.length > 0 &&
          results.map((result) => (
            <div className="movie-card" key={result.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${result.poster_path}`}
                alt={result.title}
              />
              <h3>Título: {result.title}</h3>
              <button>Mais Detalhes</button>
            </div>
          ))}
      </ul>
    </div>
  );
};

export default Search;
