"use strict";

require("dotenv").config();

var express = require("express"); //module syntax chose any
//import express from 'express';//common js syntax


var app = express();
var port = 4000;
var githubData = {
  login: "MuizzRafid",
  id: 91799156,
  node_id: "U_kgDOBXi-dA",
  avatar_url: "https://avatars.githubusercontent.com/u/91799156?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/MuizzRafid",
  html_url: "https://github.com/MuizzRafid",
  followers_url: "https://api.github.com/users/MuizzRafid/followers",
  following_url: "https://api.github.com/users/MuizzRafid/following{/other_user}",
  gists_url: "https://api.github.com/users/MuizzRafid/gists{/gist_id}",
  starred_url: "https://api.github.com/users/MuizzRafid/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/MuizzRafid/subscriptions",
  organizations_url: "https://api.github.com/users/MuizzRafid/orgs",
  repos_url: "https://api.github.com/users/MuizzRafid/repos",
  events_url: "https://api.github.com/users/MuizzRafid/events{/privacy}",
  received_events_url: "https://api.github.com/users/MuizzRafid/received_events",
  type: "User",
  user_view_type: "public",
  site_admin: false,
  name: "Muizz Rafid",
  company: null,
  blog: "",
  location: null,
  email: null,
  hireable: null,
  bio: '"that nothing belongs to man except what he strives for",(53;39).',
  twitter_username: null,
  public_repos: 7,
  public_gists: 0,
  followers: 1,
  following: 3,
  created_at: "2021-10-02T17:44:07Z",
  updated_at: "2024-10-13T17:08:22Z"
};
app.get("/", function (req, res) {
  res.send("hellow World");
});
app.get("/twitter", function (req, res) {
  res.send("muizz rafid on twitter");
});
app.get("/login", function (req, res) {
  res.send("<h1>login in my website</h1>");
});
app.get("/youtube", function (req, res) {
  res.send("<h2>Muizz Rafid Prodhan</h2>");
});
app.get("/github", function (req, res) {
  res.json(githubData);
});
app.listen(process.env.PORT, function () {
  console.log("Example app listening on port ".concat(port));
});