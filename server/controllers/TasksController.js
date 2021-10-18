const { Tasks } = require("../models");
module.exports = {
  GetAllTasks: async (req, res) => {
    const listOfTasks = await Tasks.findAll();
    res.json({ listOfTasks: listOfTasks });
  },
  GetOneTask: async (req, res) => {
    const id = req.params.id;
    const task = await Tasks.findByPk(id);
    res.json(task);
  },
  GetAllUserTasks: async (req, res) => {
    const id = req.params.id;
    const listOfTasks = await Tasks.findAll({
      where: { UserId: id },
    });
    res.json(listOfTasks);
  },
  CreateTask: async (req, res) => {
    const task = req.body;
    task.username = req.user.username;
    task.UserId = req.user.id;
    await Tasks.create(task);
    res.json(task);
  },
  UpdateTaskRating: async (req, res) => {
    const average = req.params.av;
    const id = req.params.id;
    await Tasks.update({ average: average }, { where: { id: id } });
    res.json(average);
  },
  UpdateTaskData: async (req, res) => {
    const {
      newTitle,
      newTopic,
      newCondition,
      id,
      newAnswer1,
      newAnswer2,
      newAnswer3,
      newImg1,
      newImg2,
      newImg3,
    } = req.body;
    await Tasks.update(
      {
        title: newTitle,
        taskTopic: newTopic,
        taskCondition: newCondition,
        answer1: newAnswer1,
        answer2: newAnswer2,
        answer3: newAnswer3,
        image1: newImg1,
        image2: newImg2,
        image3: newImg3,
      },
      { where: { id: id.id } }
    );
    res.json("UPDATED");
  },
  DeleteTask: async (req, res) => {
    const id = req.params.id;
    await Tasks.destroy({
      where: {
        id: id,
      },
    });
  },
};
