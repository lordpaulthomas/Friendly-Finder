const bodyParser = require("body-parser")
const express = require("express");
const path = require("path");

const app = express();


module.exports = function (app) {

  app.get("/", function (req,res) {
    res.sendFile(path.join(__dirname,"/../public/home.html"));
  });


app.get("/survey", (req,res) => {
  res.sendFile(path.join(__dirname,"/../public/survey.html"))
})

}