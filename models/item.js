const { Model, DataTypes } = require('sequelize')
const sequelize = require('../connection')

class Item extends Model { }

Item.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  eventId: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, { sequelize, modelName: 'item' })

module.exports = Item