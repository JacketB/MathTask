const express = require("express");
const router = express.Router();
const { Tasks } = require("../models");

router.get("/", async (req, res) => {
  const listOfPosts = await Tasks.findAll();
  res.json(listOfPosts);
});

router.get("/byId/:id", async (req, res) => {
  const id = req.params.id;
  const task = await Tasks.findByPk(id);
  res.json(task);
});

router.post("/", async (req, res) => {
  const post = req.body;
  await Tasks.create(post);
  res.json(post);
});

module.exports = router;
