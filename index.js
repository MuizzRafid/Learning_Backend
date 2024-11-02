require("dotenv").config();
const express = require("express"); //module syntax chose any
//import express from 'express';//common js syntax

const app = express();

const port = 4000;

app.get("/", (req, res) => {
  res.send("hellow World");
});

app.get("/twitter", (req, res) => {
  res.send("muizz rafid on twitter");
});

app.get("/login", (req, res) => {
  res.send("<h1>login in my website</h1>");
});

app.get("/youtube", (req, res) => {
  res.send("<h2>Muizz Rafid Prodhan</h2>");
});
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
