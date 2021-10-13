const Images = require("./Images");

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
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    answer1: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    answer2: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    answer3: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  Tasks.associate = (models) => {
    Tasks.hasMany(models.Comments, {
      onDelete: "cascade",
    });
    Tasks.hasMany(models.Images, {
      onDelete: "cascade",
    });
  };

  return Tasks;
};
