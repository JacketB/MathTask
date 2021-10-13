module.exports = (sequelize, DataTypes) => {
  const SolvedTasks = sequelize.define("SolvedTasks", {
    taskid: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return SolvedTasks;
};
