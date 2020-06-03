
const Artist = require('./artist.js')
const Event = require('./event.js')
const Item = require('./item.js')
const Usercarts = require('./usercart.js')


Item.belongsTo(Artist)
Artist.hasMany(Item)

module.exports = { Artist, Event, Item, Usercarts }