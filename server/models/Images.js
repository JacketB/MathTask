module.exports = (sequelize, DataTypes) => {
  const Images = sequelize.define("Images", {
    pathToImage: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Images;
};
