const express = require("express");
const cors = require("cors");
const port = 8800;

const app = express();

app.use(cors({ credentials: true, origin: "*" }));

app.use(express.json());

// Importar rotas
const movieRoutes = require("./routes/movieRoutes");
const userRoutes = require("./routes/userRoutes");

app.use("/movies", movieRoutes);
app.use("/users", userRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`);
});
