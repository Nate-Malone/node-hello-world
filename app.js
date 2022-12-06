"use strict";
require("dotenv").config();
const express = require("express");
const app = express();

const port = 8080;
const host = "0.0.0.0";

app.get("/", (req, res) => {
  res.send(
    `Hello World from IBM Cloud Essentials!<br/><br/>
    Environment Variables:
    <br/>MY_VAR_1=${process.env.MY_VAR_1}<br/>
    <br/>MY_VAR_2=${process.env.MY_VAR_2}<br/>
    <br/>MY_VAR_3=${process.env.MY_VAR_3}<br/>`
  );
});

app.listen(port, host);
console.log(`Running on http://${host}:${port}`);
