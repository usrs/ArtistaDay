const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db')

class Artist extends Model { }

Artist.init({
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bio: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    artistPhoto: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  { sequelize, modelName: "artist" }
);

module.exports = Artist
