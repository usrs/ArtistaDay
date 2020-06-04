const router = require('express').Router()
const { Event } = require('../models')

// GET all events
router.get('/events', (req, res) => 
{
  Event.findAll()
   .then(events => res.json(events))
   .catch(err=>console.log(err))
})
// GET one event
router.get('/events/:id', (req, res) =>
{
  Event.findOne({ id: req.params.id })
   .then(event => res.json(event))
   .catch(err=>console.log(err))
})
// POST one event
router.post('/events', (req, res) =>
{
  Event.create(req.body)
   .then(info => res.json(info))
   .catch(err=>console.log(err))
})
// PUT one event
router.put('/events/:id', (req, res) => 
{
  Event.update(req.body, { id: req.params.id })
   .then(info => res.json(info))
   .catch(err=>console.log(err))
})
// DELETE one event
router.delete('/events/:id', (req, res) =>
{
  Event.destroy({ id: req.params.id })
   .then(info => res.json(info))
   .catch(err=>console.log(err))
})

module.exports = router
