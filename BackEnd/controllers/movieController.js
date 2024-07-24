const axios = require("axios");

const apiKey = "36089b58e20ccc752e930e88f7576a1e";
const apiUrl = "https://api.themoviedb.org/3/movie/";
const searchUrl = "https://api.themoviedb.org/3/search/movie";
const discoverUrl = "https://api.themoviedb.org/3/discover/movie";

exports.searchMovies = async (req, res) => {
  try {
    const query = req.query.query;
    const response = await axios.get(
      `${searchUrl}?api_key=${apiKey}&query=${query}`
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar filmes" });
  }
};

exports.getMovie = async (req, res) => {
  try {
    const movieId = req.params.id;
    const response = await axios.get(`${apiUrl}${movieId}?api_key=${apiKey}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar filme" });
  }
};

exports.getAllMovies = async (req, res) => {
  try {
    const page = req.query.page || 1;
    const response = await axios.get(
      `${discoverUrl}?api_key=${apiKey}&page=${page}`
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar filmes" });
  }
};
