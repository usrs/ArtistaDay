const router = require('express').Router()
const { usercart } = require('../models')

// GET all usercarts
router.get('/usercarts', (req, res) => {
  Usercart.findAll()
    .then(usercarts => res.json(usercarts))
    .catch(err => console.error(err))
})

// GET one usercart
router.get('/usercarts/:id', (req, res) => {
  Usercart.findOne({ id: req.params.id })
    .then(usercart => res.json(usercart))
    .catch(err => console.error(err))
})

// POST one usercart
router.post('/usercarts', (req, res) => {
  Usercart.create(req.body)
    .then(() => res.sendStatus(200))
    .catch(err => console.error(err))
})

// PUT one usercart
router.put('/usercarts/:id', (req, res) => {
  Usercart.update(req.body, { where: { id: req.params.id } })
    .then(() => res.sendStatus(200))
    .catch(err => console.error(err))
})

// DELETE one usercart
router.delete('/usercarts/:id', (req, res) => {
  Usercart.destroy({ where: { id: req.params.id } })
    .then(() => res.sendStatus(200))
    .catch(err => console.error(err))
})

module.exports = router
