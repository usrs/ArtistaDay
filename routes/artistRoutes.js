const router = require('express').Router()
const { Artist } = require('../models')

// GET all artists
router.get('/artists', (req, res) => {
  Artist.getArtists(artists => res.json(artists))
})

// GET one artist
router.get('/artists/:id', (req, res) => {
  Artist.getArtistsWhere({ id: req.params.id }, artist => res.json(artist))
})

// POST one artist
router.post('/artists', (req, res) => {
  Artist.addArtist(req.body, info => res.sendStatus(200))
})

// PUT one artist
router.put('/artists/:id', (req, res) => {
  Artist.updateArtist(req.body, { id: req.params.id }, info => res.json(info))
})

// DELETE one artist
router.delete('/artists/:id', (req, res) => {
  Artist.deleteArtist({ id: req.params.id }, info => res.sendStatus(200))
})

module.exports = router
