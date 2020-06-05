const router = require('express').Router()
const { Artist, Item, Event } = require('../models')

router.get('/', (req, res) => {
  res.render('home')
})

router.get('artists/:id', (req, res) => {
  Artist.findOne({ id: req.params.id, include: [Item] })
    .then(artist => {
      res.render('artists', { artist: artist.dataValues })
    })
    .catch(err => console.error(err))
})

router.get('/artists', (req, res) => {
  Artist.findAll(artists => {
    res.render('artists', { artists })
  })
})

router.get('/items', (req, res) => {
  Item.findAll(items => {
    res.render('items', { items })
  })
})

router.get('/events', (req, res) => {
  Event.getEvents(events => {
    res.findAll('events', { events })
  })
})

module.exports = router
