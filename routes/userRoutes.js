const express = require("express");
const { registerUser, loginuser, currentuser } = require("../controllers/userController");
const validateToken = require("../middleware/validateTokenHandler");
const router = express.Router();

router.post("/register", registerUser);

router.post("/login", loginuser );

router.get("/current", validateToken,currentuser );

module.exports = router;