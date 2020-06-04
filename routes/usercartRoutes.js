const router = require('express').Router()
const { Usercart } = require('../models')

// GET all usercarts
router.get('/usercarts', (req, res) =>
{
  Usercart.findAll()
   .then(usercarts => res.json(usercarts))
   .catch(err=>console.log(err))
})
// GET one usercart
router.get('/usercarts/:id', (req, res) =>
{
  Usercart.findOne({ id: req.params.id })
   .then(usercart => res.json(usercart))
   .catch(err=>console.log(err))
})
// POST one usercart
router.post('/usercarts', (req, res) =>
{
  Usercart.create(req.body)
   .then(info => res.json(info))
   .catch(err=>console.log(err))
})
// PUT one usercart
router.put('/usercarts/:id', (req, res) =>
{
  Usercart.update(req.body, { id: req.params.id })
  .then(info => res.json(info))
  .catch(err=>console.log(err))
})
// DELETE one usercart
router.delete('/usercarts/:id', (req, res) =>
{
  Usercart.destroy({ id: req.params.id })
   .then(info => res.json(info))
   .catch(err=>console.log(err))
})
  

module.exports = router
