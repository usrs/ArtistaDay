const router = require('express').Router()
const { Artist } = require('../models')

// GET all artists
router.get('/artists', (req, res) =>
{
  Artist.getArtists()
   .then(artists => res.json(artists))
   .catch(err=>console.log(err))
})
// GET one artist
router.get('/artists/:id', (req, res) => 
{
  Artist.getArtistsWhere({ id: req.params.id })
  .then(artist => res.json(artist))
  .catch(err=>console.log(err))
})
// POST one artist
router.post('/artists', (req, res) => 
{
  Artist.addArtist(req.body)
   .then(info => res.json(info))
   .catch(err=>console.log(err))
})
// PUT one artist
router.put('/artists/:id', (req, res) =>
{
  Artist.updateArtist(req.body, { id: req.params.id })
   .then(info => res.json(info))
   .catch(err=>console.log(err))
})
// DELETE one artist
router.delete('/artists/:id', (req, res) => 
{
  Artist.deleteArtist({ id: req.params.id })
   .then(info => res.json(info))
   .catch(err=>console.log(err))
})
  
module.exports = router
