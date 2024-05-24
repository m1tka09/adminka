// app.js
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const mainRoute = require("./routes/main");
const gamesRouter = require("./routes/games");

const PORT = 3000;
const app = express();

const cors = require("./middlewares/cors")

app.use(
    cors,
    bodyParser.json(),
    express.static(path.join(__dirname, "public")),
    mainRoute,
    gamesRouter
);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
