const router = require('express').Router()
const { Artist, Item, Event, Usercart } = require('../models')

router.get('/', (req, res) => {
  res.render('index', {
    startDate: '2020-07-12 00:00:00',
    endDate: '2020-07-12 11:59:59',
    title: 'ArtistADay',
    artistId: 1,
    discount: 40
  })
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
  Event.findAll(events => {
    res.render('events', { events })
  })
})

router.get('/usercarts', (req, res) => {
  Usercart.findAll(usercarts => {
    res.render('usercarts', { usercarts })
  })
})

module.exports = router
