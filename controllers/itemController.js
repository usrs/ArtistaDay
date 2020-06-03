const orm = require('../orm')

module.exports = {
  getItems(cb) {
    orm.getAll('items', items => cb(items))
  },
  getItemsWhere(where, cb) {
    orm.getAllWhere('items', where, items => cb(items))
  },
  addItem(item, cb) {
    orm.createOne('items', item, info => cb(info))
  },
  updateItem(changes, where, cb) {
    orm.updateOne('items', changes, where, info => cb(info))
  },
  deleteItem(where, cb) {
    orm.deleteOne('items', where, info => cb(info))
  }
}
