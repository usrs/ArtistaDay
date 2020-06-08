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
  price: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  artistUsername: {
    type: DataTypes.INTEGER,
    allowNull: true
  },

  // FOREIGN KEY (artistId) REFERENCES artists(id)
  eventId: {
    type: DataTypes.INTEGER,
    allowNull: true
  }
}, { sequelize, modelName: 'item' })

module.exports = Item
