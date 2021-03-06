module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define("Users", {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  Users.associate = (models) => {
    Users.hasMany(models.Tasks, {
      onDelete: "cascade",
    });
    Users.hasMany(models.Ratings, {
      onDelete: "cascade",
    });
    Users.hasMany(models.SolvedTasks, {
      onDelete: "cascade",
    });
  };
  return Users;
};
