const router = require("express").Router()
const imgur = require("imgur")
const fetch = require('node-fetch')

router.post('/imgur', (req, res) => {
  const { name, photo } = req.body
  const base64Photo = photo.split(',')[1]
  imgur.setAPIUrl("https://api.imgur.com/3/");
  imgur.setClientId(process.env.ClientID);
  console.log(imgur.getClientId())
  imgur.uploadBase64(base64Photo)
    .then(json => {
      console.log(json.data.link)
      link = json.data.link
    })
    .then(() => {
      console.log(req.body.name)
      fetch(process.env.API_URL + "/api/images", {
        method: "POST",
        body: JSON.stringify({
          name: name,
          url: link
        }),
      }).catch(err => {
          console.log(err.message)
        })
      console.log('we did it reddit!')
    })
    .catch(err => {
      console.log(err.message)
    })
  // our file will be printed to the terminal here
  res.end()
})

module.exports = router