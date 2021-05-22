const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
  res.send({ type: "GET" });
});

router.post("/", function (req, res) {
  res.send({ type: "POST" });
});

router.put("//:id", function (req, res) {
  res.send({ type: "PUT" });
});

router.delete("//:id", function (req, res) {
  res.send({ type: "DELETE" });
});
