const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db')

class Artist extends Model { }

Artist.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  bio: {
    type: DataTypes.BLOB,
    allowNull: false
  },
  artistPhoto: {
    type: DataTypes.BLOB,
    allowNull: true
  }
}, { sequelize, modelName: 'artist' })

module.exports = Artist
