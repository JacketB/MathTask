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
    image1: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    image2: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    image3: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    average: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
  });
  Tasks.associate = (models) => {
    Tasks.hasMany(models.Comments, {
      onDelete: "cascade",
    });
  };

  return Tasks;
};
