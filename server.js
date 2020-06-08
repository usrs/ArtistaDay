require('dotenv').config()

const http = require("http")


//File upload
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");

//Bring in express
const express = require('express')
const { join } = require('path')
const app = express()


// // Create a socket server http using app
// const server = http.createServer(app);
// const io = socketio(server);

app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())
app.use(fileUpload());



const PORT = process.env.PORT || 3000;


app.use(require('./routes'))



require('./connection')
  .sync()
  .then(() => server.listen(PORT, () => console.log("http://localhost:3000")))
  .catch((err) => console.error(err));
