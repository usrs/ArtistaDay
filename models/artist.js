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
  }
}, { sequelize, modelName: 'artist' })

module.exports = Artist
