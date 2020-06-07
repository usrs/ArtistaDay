const Artist = require('./Artist.js')
const Item = require('./Item.js')

Artist.hasMany(Item)
Item.belongsTo(Artist)

module.exports = { Artist, Item }
