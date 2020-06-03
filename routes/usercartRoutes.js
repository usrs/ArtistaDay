const router = require('express').Router()
const { Usercart } = require('../controllers')

// GET all usercarts
router.get('/usercarts', (req, res) =>
{
  Usercart.getUsercarts()
   .then(usercarts => res.json(usercarts))
   .catch(err=>console.log(err))
})
// GET one usercart
router.get('/usercarts/:id', (req, res) =>
{
  Usercart.getUsercartsWhere({ id: req.params.id })
   .then(usercart => res.json(usercart))
   .catch(err=>console.log(err))
})
// POST one usercart
router.post('/usercarts', (req, res) =>
{
  Usercart.addUsercart(req.body)
   .then(info => res.json(info))
   .catch(err=>console.log(err))
})
// PUT one usercart
router.put('/usercarts/:id', (req, res) =>
{
  Usercart.updateUsercart(req.body, { id: req.params.id })
  .then(info => res.json(info))
  .catch(err=>console.log(err))
})
// DELETE one usercart
router.delete('/usercarts/:id', (req, res) =>
{
  Usercart.deleteUsercart({ id: req.params.id })
   .then(info => res.json(info))
   .catch(err=>console.log(err))
})
  

module.exports = router
