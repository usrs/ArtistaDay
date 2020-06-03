const orm = require('../orm')

module.exports = {
  getUsercart(cb) {
    orm.getAll('usercarts', usercarts => cb(usercarts))
  },
  getUsercartsWhere(where, cb) {
    orm.getAllWhere('usercarts', where, usercarts => cb(usercarts))
  },
  addUsercart(usercart, cb) {
    orm.createOne('usercarts', usercart, info => cb(info))
  },
  updateUsercart(changes, where, cb) {
    orm.updateOne('usercarts', changes, where, info => cb(info))
  },
  deleteUsercart(where, cb) {
    orm.deleteOne('usercarts', where, info => cb(info))
  }
}
