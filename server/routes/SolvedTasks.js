const express = require("express");
const { validateToken } = require("../middlewares/AuthMiddlewares");
const router = express.Router();
const { SolvedTasks } = require("../models");
router.post("/byId/:id", validateToken, async (req, res) => {
  const taskid = req.params.id;
  const UserId = req.user.id;
  const found = await SolvedTasks.findOne({
    where: { taskid: taskid, UserId: UserId },
  });
  if (!found) {
    await SolvedTasks.create({ taskid: taskid, UserId: UserId });
    res.json("Task solved");
  } else {
    res.json("Task alredy solved");
  }
});

router.get("/byUserId", validateToken, async (req, res) => {
  const UserId = req.user.id;
  const tasks = await SolvedTasks.findAll({ where: { UserId: UserId } });
  res.json(tasks);
});

module.exports = router;
