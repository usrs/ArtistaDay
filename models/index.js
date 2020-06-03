const Artist = require('./Artist.js')
const Event = require('./Event.js')
const Item = require('./Item.js')

Artist.hasMany(Event, Item)
Event.hasMany(Item)
Event.belongsTo(Artist)
Item.belongsTo(Artist)

module.exports = { Artist, Event, Item }
