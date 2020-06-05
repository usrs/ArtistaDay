const router = require('express').Router()
const { Artist, Item, Event } = require('../models')
const artistArray = {
  "Annie Leibovitz": ["https://i.imgur.com/vqJyZHA.jpg", "https://i.imgur.com/7BlgCXF.jpg"],
  "Sebastio Salgado": ["https://i.imgur.com/9JYpOT5.jpg", "https://i.imgur.com/6sHrO4p.jpg"], 
  "Henri Matisse": ["https://i.imgur.com/wzhwvZY.jpg", "https://i.imgur.com/Y6xdYHC.jpg"]
}

let i
let j

const featuredWork = {
  for (i = 0; i < artistArray.length; i++) {
    for (j = 0; j < artistArray[i].length; j++) {
      console.log([i][j][0])
    }
  }
}

// const featuredWork = artistArray.featuredArtist[0]

router.get('/', (req, res) => {
  res.render('home', { featuredWork })
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

router.get('items/:id', (req, res) => {
  Item.findOne({ id: req.params.id, include: [Artist] })
    .then(item => {
      res.render('items', { item: item.dataValues })
    })
    .catch(err => console.error(err))
})

router.get('/items', (req, res) => {
  Item.findAll(items => {
    res.render('items', { items })
  })
})

router.get('events/:id', (req, res) => {
  Event.findOne({ id: req.params.id, include: [Artist] })
    .then(event => {
      res.render('events', { event: event.dataValues })
    })
    .catch(err => console.error(err))
})

router.get('/events', (req, res) => {
  Event.getEvents(events => {
    res.findAll('events', { events })
  })
})

module.exports = router
