const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db')

class Item extends Model { }

Item.init({
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  productUrl: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  artistUrl: {
    type: DataTypes.TEXT,
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
