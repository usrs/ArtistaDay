const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db')

class Artist extends Model { }

Artist.init({
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
      allowNull: true,
    },
    bio: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    artistPhoto: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  { sequelize, modelName: "artist" }
);

module.exports = Artist
