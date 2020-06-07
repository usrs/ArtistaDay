const express = require('express')
const { join } = require("path")
const imgur = require('imgur')
const app = express()

app.use(express.static('public'))
app.use(express.json({limit: '10mb', extended: true}))
app.use(express.urlencoded({ limit: '10mb', extended: true }))

app.get('/dashboard', (req, res) => {
  res.sendFile(__dirname + '/public/dashboard.html')
})

app.post('/dashboard', (req, res) => {
  const { photo } = req.body
  const base64Photo = photo.split(',')[1]
  imgur.setClientId(process.env.ClientID)
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

// send the file to your route after uploading
// use imgur in the server route

app.listen(3000, () => {
  console.log('App listening on port 3000')
})
