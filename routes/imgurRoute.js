const router = require("express").Router()
const imgur = require("imgur")
const fetch = require('node-fetch')

router.post('/imgur', (req, res) => {
  const { name, photo } = req.body
  const base64Photo = photo.split(',')[1]
  imgur.setAPIUrl("https://api.imgur.com/3/");
  imgur.setClientId(process.env.ClientID);
  imgur.uploadBase64(base64Photo)
    .then(json => {
      console.log(json.data.link)
      link = json.data.link
      res.json(link)
    })
  // our file will be printed to the terminal here
  // res.end()
  // res.json(link)
})

module.exports = router