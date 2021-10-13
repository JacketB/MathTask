const express = require("express");
const { validateToken } = require("../middlewares/AuthMiddlewares");
const router = express.Router();
const { Ratings } = require("../models");

router.post("/byId/:id/grade/:gr", validateToken, async (req, res) => {
  const taskGrade = req.params.gr;
  const taskid = req.params.id;
  const UserId = req.user.id;
  const found = await Ratings.findOne({
    where: { UserId: UserId, taskid: taskid },
  });
  if (!found) {
    await Ratings.create({
      taskGrade: taskGrade,
      taskid: taskid,
      UserId: UserId,
    });
    res.json("SUCCES");
  } else {
    res.json("Task alredy rated!");
  }
});
router.get("/:taskid", async (req, res) => {
  const taskid = req.params.taskid;
  const ratings = await Ratings.findAll({ where: { taskid: taskid } });
  res.json(ratings);
});
module.exports = router;
