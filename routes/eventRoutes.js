const router = require('express').Router()
const { Event } = require('../controllers')

// GET all events
router.get('/events', (req, res) => 
{
  Event.getEvents(events => res.json(events))
})
// GET one event
router.get('/events/:id', (req, res) =>
{
  Event.getEventsWhere({ id: req.params.id }, game => res.json(event))
})
// POST one event
router.post('/events', (req, res) =>
{
  Event.addEvent(req.body, info => res.json(info))
})
// PUT one event
router.put('/events/:id', (req, res) => 
{
  Event.updateEvent(req.body, { id: req.params.id }, info => res.json(info))
})
// DELETE one event
router.delete('/events/:id', (req, res) =>
{
  Event.deleteEvent({ id: req.params.id }, info => res.json(info))
})

module.exports = router
