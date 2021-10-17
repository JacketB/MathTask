const { Comments } = require("../models");
module.exports = {
  AddComment: async (req, res) => {
    const comment = req.body;
    const username = req.user.username;
    comment.username = username;
    await Comments.create(comment);
    res.json(comment);
  },
  GetComments: async (req, res) => {
    const taskId = req.params.taskId;
    const comments = await Comments.findAll({ where: { taskId: taskId } });
    res.json(comments);
  },
};
