const router = require("express").Router()
const { Image } = require("../models")
const { join } = require('path')

// router.get("/dashboard/:id", (req, res) => {
//   Artist.findOne({ id: req.params.id, include: [Image] })
//     .then((artist) => {
//       res.render("dashboard", { artist: artist.dataValues })
//     })
//     .catch((err) => console.error(err));
// })

router.get('/', (req, res) => {
  res.sendFile(join(__dirname, '../public/index.html'))
})

router.get('/dashboard', (req, res) => {
  res.sendFile(join(__dirname, '../public/dashboard.html'))
})

module.exports = router
