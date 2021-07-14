// importing modules
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

// routes path
const getPlanetRouter = require("./routes/getPlanet");

const app = express();

// middleware setups
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// routes
app.use("/planets", getPlanetRouter);

module.exports = app;
