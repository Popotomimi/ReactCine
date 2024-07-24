const express = require("express");
const router = express.Router();
const movieController = require("../controllers/movieController");

router.get("/", movieController.getAllMovies);
router.get("/search", movieController.searchMovies);
router.get("/:id", movieController.getMovie);

module.exports = router;
