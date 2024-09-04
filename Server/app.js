const express = require("express");
const app = express();
const cors = require("cors");
const controller = require("./controller");

app.use(cors());

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.get("/users", (req, res) => {
  var resObj = [];
  controller.getUsers((req, res, next) => {
    res.send();
  });
});

app.post("/createuser", (req, res) => {
  controller.addUser(req.body, (callback) => {
    res.send();
  });
});

app.put("/updateuser", (req, res) => {
  controller.updateUser(req.body, (callback) => {
    res.send(callback);
  });
});

app.delete("/deleteuser", (req, res) => {
  controller.deleteUser(req.body, (callback) => {
    res.send(callback);
  });
});

module.exports = app;