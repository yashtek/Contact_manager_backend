const express = require("express");
const { registerUser, loginuser, currentuser } = require("../controllers/userController");
const router = express.Router();

router.post("/register", registerUser);

router.post("/login", loginuser );

router.get("/current", currentuser );

module.exports = router;