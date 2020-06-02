const orm = require('../orm')

module.exports = {
  getEvents(cb) {
    orm.getAll('events', events => cb(events))
  },
  getEventsWhere(where, cb) {
    orm.getAllWhere('events', where, events => cb(events))
  },
  addEvent(event, cb) {
    orm.createOne('events', event, info => cb(info))
  },
  updateEvent(changes, where, cb) {
    orm.updateOne('events', changes, where, info => cb(info))
  },
  deleteEvent(where, cb) {
    orm.deleteOne('events', where, info => cb(info))
  }
}