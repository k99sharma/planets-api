// importing modules
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const helmet = require("helmet");
const cors = require("cors");

// routes path
const getPlanetRouter = require("./routes/getPlanet");

const app = express();

// middleware setups
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(helmet({ contentSecurityPolicy: false }));
app.use(cors());

app.disable("x-powered-by");

// routes
app.use("/planets", getPlanetRouter);

module.exports = app;
