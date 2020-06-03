const router = require('express').Router()
const { Item } = require('../controllers')

// GET all items
router.get('/items', (req, res) => {
  Item.getItems(items => res.json(items))
})

// GET one item
router.get('/items/:id', (req, res) => {
  Item.getItemsWhere({ id: req.params.id }, item => res.json(item))
})

// POST one item
router.post('/items', (req, res) => {
  Item.addItem(req.body, info => res.sendStatus(200))
})

// PUT one item
router.put('/items/:id', (req, res) => {
  Item.updateItem(req.body, { id: req.params.id }, info => res.json(info))
})

// DELETE one item
router.delete('/items/:id', (req, res) => {
  Item.deleteItem({ id: req.params.id }, info => res.json(info))
})

module.exports = router
