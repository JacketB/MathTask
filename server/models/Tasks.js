module.exports = (sequlize, DataTypes) => {
  const Tasks = sequlize.define("Tasks", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    taskTopic: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    taskCondition: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    taskAuthor: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return Tasks;
};
