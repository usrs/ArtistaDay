require("dotenv").config()
const express = require('express')
const { join } = require("path")
const imgur = require('imgur')
const app = express()

app.use(express.static(join(__dirname, 'public')))
app.use(express.json({ limit: '10mb', extended: true }))
app.use(express.urlencoded({ limit: '10mb', extended: true }))

app.use(require("./routes"))

const PORT = process.env.PORT || 3000

// app.get('/dashboard', (req, res) => {
//   res.sendFile(__dirname + '/public/dashboard.html')
// })

// app.post("/dashboard", (req, res) => {
//   const { photo } = req.body;
//   const base64Photo = photo.split(",")[1];
//   // imgur.uploadUrl('https://api.imgur.com/3/upload')
//   imgur.loadClientId(process.env.ClientID);
//   console.log("im working here!");
//   imgur
//     .uploadBase64(base64Photo)
//     .then((json) => {
//       console.log(json.data);
//     })
//     .catch((err) => {
//       console.log(err.message);
//     });
//   // our file will be printed to the terminal here
//   res.end();
// });

// send the file to your route after uploading
// use imgur in the server route

require('./db')
  .sync()
  .then(() => app.listen(PORT, () => console.log('http://localhost:3000')))
  .catch((err) => console.error(err))
