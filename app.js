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
    <br/>integrationID=${process.env.integrationID}<br/>
    <br/>region=${process.env.region}<br/>
    <br/>serviceInstanceID=${process.env.serviceInstanceID}<br/>`
  );
});

app.listen(port, host);
console.log(`Running on http://${host}:${port}`);

