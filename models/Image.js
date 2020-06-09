const { Model, DataTypes } = require('sequelize')
const sequelize = require('../connection')

class Image extends Model { }

Image.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  url: {
    type: DataTypes.STRING,
    allowNull: false
  },
}, { sequelize, modelName: 'image' })

module.exports = Image