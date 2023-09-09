const express = require("express");

const authenticateMiddleware = require("../middlewares/authenticate");
const authController = require("../controllers/auth-controller");

const router = express.Router();

router.post("/login", authController.login);
router.get("/getuser", authenticateMiddleware, authController.getUser);

module.exports = router;
