const { Ratings } = require("../models");
module.exports = {
  AddRate: async (req, res) => {
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
  },
  GetRating: async (req, res) => {
    const taskid = req.params.taskid;
    const ratings = await Ratings.findAll({ where: { taskid: taskid } });
    res.json(ratings);
  },
};
