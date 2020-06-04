const router = require('express').Router()
const { Artist } = require('../models')

// GET all artists
router.get('/artists', (req, res) =>
{
  Artist.findAll()
   .then(artists => res.json(artists))
   .catch(err=>console.log(err))
})
// GET one artist
router.get('/artists/:id', (req, res) => 
{
  Artist.findOne({ id: req.params.id })
  .then(artist => res.json(artist))
  .catch(err=>console.log(err))
})
// POST one artist
router.post('/artists', (req, res) => 
{
  Artist.create(req.body)
   .then(info => res.json(info))
   .catch(err=>console.log(err))
})
// PUT one artist
router.put('/artists/:id', (req, res) =>
{
  Artist.update(req.body, { id: req.params.id })
   .then(info => res.json(info))
   .catch(err=>console.log(err))
})
// DELETE one artist
router.delete('/artists/:id', (req, res) => 
{
  Artist.destroy({ id: req.params.id })
   .then(info => res.json(info))
   .catch(err=>console.log(err))
})
  
module.exports = router
