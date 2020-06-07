const express = require('express')
const { join } = require("path")
const imgur = require('imgur')
const app = express()

app.use(express.static(join(__dirname, 'public')))
app.use(express.json({limit: '10mb', extended: true}))
app.use(express.urlencoded({ limit: '10mb', extended: true }))

app.get('/dashboard', (req, res) => {
  res.sendFile(__dirname + '/public/dashboard.html')
})



// send the file to your route after uploading
// use imgur in the server route

require("./connection")
  .sync()
  .then(() => app.listen(3000, () => console.log("http://localhost:3000")))
  .catch((err) => console.error(err));
