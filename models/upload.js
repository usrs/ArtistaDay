const { Model, DataTypes } = require("sequelize");
const sequelize = require("../connection");

class Upload extends Model {}

Upload.init(
  {
    body: {
      type: DataTypes.STRING(10000),
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  { sequelize, modelName: "upload" }
);

module.exports = Upload;
