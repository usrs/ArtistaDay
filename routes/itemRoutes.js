const router = require('express').Router()
const { Item } = require('../models')

// GET all items
router.get('/items', (req, res) =>
{
  Item.findAll()
   .then(items => res.json(items))
   .catch(err=>console.log(err))
})
// GET one item
router.get('/items/:id', (req, res) =>
{
  Item.findOne({ id: req.params.id })
   .then(item => res.json(item))
   .catch(err=>console.log(err))
})
// POST one item
router.post('/items', (req, res) =>
{
  Item.create(req.body)
   .then(info => res.json(info))
   .catch(err=>console.log(err))
})
//PUT one item
router.put('/items/:id', (req, res) =>
{
  Item.update(req.body, { id: req.params.id })
   .then(info => res.json(info))
   .catch(err=>console.log(err))
})
// DELETE one item
router.delete('/items/:id', (req, res) =>
{
  Item.destroy({ id: req.params.id })
  .then(info => res.json(info))
  .catch(err=>console.log(err))
})

module.exports = router