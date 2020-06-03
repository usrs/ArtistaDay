const router = require('express').Router()
const { Usercart } = require('../controllers')

// GET all usercarts
router.get('/usercarts', (req, res) => {
  Usercart.getUsercarts(usercarts => res.json(usercarts))
})

// GET one usercart
router.get('/usercarts/:id', (req, res) => {
  Usercart.getUsercartsWhere({ id: req.params.id }, usercart => res.json(usercart))
})

// POST one usercart
router.post('/usercarts', (req, res) => {
  Usercart.addUsercart(req.body, info => res.sendStatus(200))
})

// PUT one usercart
router.put('/usercarts/:id', (req, res) => {
  Usercart.updateUsercart(req.body, { id: req.params.id }, info => res.json(info))
})

// DELETE one usercart
router.delete('/usercarts/:id', (req, res) => {
  Usercart.deleteUsercart({ id: req.params.id }, info => res.json(info))
})

module.exports = router
