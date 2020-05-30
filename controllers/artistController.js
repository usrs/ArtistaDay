const orm = require('../orm')

module.exports = {
  getArtists(cb) {
    orm.getAll('artists', artists => cb(artists))
  },
  getArtistsWhere(where, cb) {
    orm.getAllWhere('artists', where, artists => cb(artists))
  },
  addArtist(artist, cb) {
    orm.createOne('artists', artist, info => cb(info))
  },
  updateArtist(changes, where, cb) {
    orm.updateOne('artists', changes, where, info => cb(info))
  },
  deleteArtist(where, cb) {
    orm.deleteOne('artists', where, info => cb(info))
  }
}
