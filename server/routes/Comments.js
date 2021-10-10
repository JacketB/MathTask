const express = require("express");
const router = express.Router();
const { Comments } = require("../models");
const { validateToken } = require("../middlewares/AuthMiddlewares");

router.get("/:taskId", async (req, res) => {
  const taskId = req.params.taskId;
  const comments = await Comments.findAll({ where: { taskId: taskId } });
  res.json(comments);
});

router.post("/", validateToken, async (req, res) => {
  const comment = req.body;
  const username = req.user.username;
  comment.username = username;
  await Comments.create(comment);
  res.json(comment);
});
module.exports = router;
