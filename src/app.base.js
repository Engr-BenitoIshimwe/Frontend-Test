const express = require("express");
const app = express();

app.get("/", (req, res) => {
 // TO DO: show todo list to user
});

app.post("/todo", (req, res) => {
 // TO DO: save a todo
});

module.exports = app;