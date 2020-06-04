require('dotenv').config()
const imgur = require('imgur')
const express = require("express");
const app = express();

imgur.setClientId(process.env.ClientId)

imgur.uploadFile(document.getElementById('file').textContent)
  .then(function (json) {
    console.log(json.data.link)
    app.post('/dashboard' function (req, res) {
      res.send(document.getElementById('fname').textContent)
      res.send(json.data.link)
    })
  })
  .catch(function (err) {
    console.error(err.message)
  })