const express = require("express");
const cors = require("cors");
const port = 8800;

const app = express();

app.use(cors({ credentials: true, origin: "*" }));

app.use(express.json());

app.use(express.static("public"));

app.listen(port);
