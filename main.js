/*
    Made by : Armando Arredondo Valle, Antonio Noguerón Bárcenas and Camila Turner Escalante
    Start date: 21/10/2022
*/
const express = require("express");
const user = require("./routes/user");
const measurement = require("./routes/measurement");
const plant = require("./routes/plant");

const cors = require("cors");
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

app.use("/", user);
app.use("/", measurement);
app.use("/", plant);

app.listen(port, () =>
  console.log(`Servidor iniciado en http://localhost:${port}`)
);
