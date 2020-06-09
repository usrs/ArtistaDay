const router = require("express").Router()
const { Image } = require("../models")
const { join } = require('path')

router.get("/", (req, res) => {
  Image.findAll()
    .then(item => {
      res.render("home", { item: item.dataValues })
    })
    .catch(err => console.error(err))
})

router.get("/dashboard/:id", (req, res) => {
  Artist.findOne({ id: req.params.id, include: [Image] })
    .then((artist) => {
      res.render("dashboard", { artist: artist.dataValues })
    })
    .catch((err) => console.error(err));
})

router.get("/test", (req, res) => {
  res.render("test")
})

router.get('/', (req, res) => {
  res.sendFile(join(__dirname, '../public/index.html'))
})

module.exports = router
