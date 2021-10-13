module.exports = (sequelize, DataTypes) => {
  const Ratings = sequelize.define("Ratings", {
    taskGrade: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    taskid: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Ratings;
};
