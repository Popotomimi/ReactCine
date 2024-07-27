const router = require("express").Router();

const userController = require("../controllers/userController");

// Middleware
const verifyToken = require("../helpers/verify-token");

router.post("/register", userController.register);
router.post("/login", userController.login);

module.exports = router;
