const { Model, DataTypes } = require('sequelize')
const sequelize = require('../connection')

class Artist extends Model { }

Artist.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  bio: {
    type: DataTypes.STRING,
    allowNull: false
  },
  artistId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  item1: {
    type: DataTypes.STRING,
    allowNull: false
  },
  item2: {
    type: DataTypes.STRING,
    allowNull: false
  },
  item3: {
    type: DataTypes.STRING,
    allowNull: false
  },
  item4: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, { sequelize, modelName: 'artist' })

module.exports = Artist
