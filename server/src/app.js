const express = require("express");
const path = require("path");
const cors = require("cors");
const morgan = require("morgan");

const app = express();
const planetsRouter = require("./routes/planets/planets.router");
const launchesRouter = require("./routes/launches/launches.router");

app.use(
  cors({
    origin: "*",
  })
);

app.use(morgan("combined"));

app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "build")));

app.use("/planets", planetsRouter);
app.use("/launches", launchesRouter);
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

module.exports = app;
