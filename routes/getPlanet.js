// importing modules
const express = require("express");
const router = express.Router();

// importing controllers
const { getPlanetController } = require("../controllers/getPlanet.js");

// GET route
router.get("/getPlanet", getPlanetController);

module.exports = router;
