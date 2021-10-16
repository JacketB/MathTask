const express = require("express");
const router = express.Router();
const { Tasks } = require("../models");
const { validateToken } = require("../middlewares/AuthMiddlewares");

router.get("/", async (req, res) => {
  const listOfTasks = await Tasks.findAll();
  res.json({ listOfTasks: listOfTasks });
});

router.get("/byId/:id", async (req, res) => {
  const id = req.params.id;
  const task = await Tasks.findByPk(id);
  res.json(task);
});

router.get("/byuserId/:id", async (req, res) => {
  const id = req.params.id;
  const listOfTasks = await Tasks.findAll({
    where: { UserId: id },
  });
  res.json(listOfTasks);
});

router.post("/", validateToken, async (req, res) => {
  const task = req.body;
  task.username = req.user.username;
  task.UserId = req.user.id;
  await Tasks.create(task);
  res.json(task);
});

router.put("/average/:id/:av", async (req, res) => {
  const average = req.params.av;
  const id = req.params.id;
  await Tasks.update({ average: average }, { where: { id: id } });
  res.json(average);
});

router.put("/updated", validateToken, async (req, res) => {
  const { newTitle, newTopic, newCondition, id } = req.body;
  await Tasks.update(
    { title: newTitle, taskTopic: newTopic, taskCondition: newCondition },
    { where: { id: id.id } }
  );
  res.json(newTitle, newTopic, newCondition);
});
module.exports = router;
