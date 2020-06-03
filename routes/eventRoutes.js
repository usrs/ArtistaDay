const router = require('express').Router()
const { Event } = require('../controllers')

// GET all events
router.get('/events', (req, res) => 
{
  Event.getEvents()
   .then(events => res.json(events))
   .catch(err=>console.log(err))
})
// GET one event
router.get('/events/:id', (req, res) =>
{
  Event.getEventsWhere({ id: req.params.id })
   .then(event => res.json(event))
   .catch(err=>console.log(err))
})
// POST one event
router.post('/events', (req, res) =>
{
  Event.addEvent(req.body)
   .then(info => res.json(info))
   .catch(err=>console.log(err))
})
// PUT one event
router.put('/events/:id', (req, res) => 
{
  Event.updateEvent(req.body, { id: req.params.id })
   .then(info => res.json(info))
   .catch(err=>console.log(err))
})
// DELETE one event
router.delete('/events/:id', (req, res) =>
{
  Event.deleteEvent({ id: req.params.id })
   .then(info => res.json(info))
   .catch(err=>console.log(err))
})

module.exports = router
