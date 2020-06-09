const router = require("express").Router()
const imgur = require("imgur")

router.post('/imgur', (req, res) => {
  const { photo } = req.body
  const base64Photo = photo.split(',')[1]
  imgur.setAPIUrl("https://api.imgur.com/3/");
  imgur.setClientId(process.env.ClientID);
  console.log(imgur.getClientId())
  imgur.uploadBase64(base64Photo)
    .then(json => {
      console.log(json.data)
    })
    .catch(err => {
      console.log(err.message)
    })
  // our file will be printed to the terminal here
  res.end()
})

module.exports = router