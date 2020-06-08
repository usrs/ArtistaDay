const { Model, DataTypes } = require('sequelize')
const sequelize = require('../connection')

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
  category: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  artistId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },

  // FOREIGN KEY (artistId) REFERENCES artists(id)

  eventId: {
    type: DataTypes.INTEGER,
    allowNull: true
  }
}, { sequelize, modelName: 'item' })

module.exports = Item
