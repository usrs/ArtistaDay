const Artist = require('./artist.js')
const Event = require('./event.js')
const Item = require('./item.js')

Artist.hasMany(Event, Item)
Event.belongsTo(Artist)
Item.belongsTo(Artist)

module.exports = { Artist, Event, Item }
