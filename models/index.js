const Artist = require('./Artist.js')
const Event = require('./Event.js')
const Item = require('./Item.js')
const Upload = require('./upload.js')



Artist.hasMany(Event, {foreignKey: {allowNull:false, onDelete: "CASCADE"}})
Event.belongsTo(Artist)

Artist.hasMany(Item, {foreignKey: {allowNull: false, onDelete: "CASCADE"}});
Item.belongsTo(Artist);

Artist.hasMany(Upload, {foreignKey: {allowNull: false, onDelete: "CASCADE"}});
Upload.belongsTo(Artist);


module.exports = { Artist, Event, Item, Upload }
