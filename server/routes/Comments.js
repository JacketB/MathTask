const express = require("express");
const router = express.Router();
const { Comments } = require("../models");

router.get("/:TaskId", async (req, res) => {
  const TaskId = req.params.TaskId;
  const comments = await Comments.findAll({ where: { TaskId: TaskId } });
  res.json(comments);
});

router.post("/", async (req, res) => {
  const comment = req.body;
  await Comments.create(comment);
  res.json(comment);
});

module.exports = router;
