const express = require("express");
const server = express();

server.use(express.json());

let dummy = {
  name: "Deavy",
  skills: ["HTML", "CSS", "JS"],
};

server.get("/api/data", (req, res, next) => {
  try {
    res.status(200).json(dummy);
  } catch (err) {
    next(err);
  }
});

server.post("/api/skills", (req, res, next) => {
  try {
    const { skill } = req.body;
    dummy.skills.push(skill);
    res.status(201).json(skill);
  } catch (err) {
    next(err);
  }
});

server.put("/api/data", (req, res, next) => {
  try {
    const [k, v] = req.body.kvPair;
    dummy = { ...dummy, [k]: v };
  } catch (err) {
    next(err);
  }
});

server.delete("/api/skills/:name", (req, res, next) => {
  try {
    const { name } = req.params;
    dummy.skills = dummy.skills.filter((skill) => {
      return skill === name ? null : skill;
    });
  } catch (err) {
    next(err);
  }
});

server.use("*", (err, req, res) => {
  res.status(500).json({ message: err.message, stack: err.stack });
});

module.exports = server;
