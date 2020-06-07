require('dotenv').config()
// Use socket.io 
const http = require("http")
const socketio = require("socket.io")

//File upload
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");

//Bring in express
const express = require('express')
const { join } = require('path')
const app = express()


// Create a socket server http using app
const server = http.createServer(app);
const io = socketio(server);

app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())
app.use(fileUpload());

// Start to listening
io.on('connection', socket => {

    // On new user, broardcast to everyone that is online
    socket.on('newUserSignUp',  message =>
    {
        //Broadcast when a new user signup
        console.log(message)
        socket.broadcast.emit("newUserSignUp", message)
    })
   
    // On new update, letting all the users that is friend know so we can re-render their list items
    socket.on("newUpdate", ({userId, newUpdate}) => 
    {
        if(userId.length > 0)
        {
            userId.forEach(user =>
                {
                    socket.emit(user, newUpdate )
                })
        } 
    })

    // Sending message back and forth using user id
    socket.on('message', ({userId, message }) =>
    {
        socket.emit(userId,message)
    })

    // On when disconnect
    socket.on('disconnect', () =>
    {
        io.emit('userleft',"User has left!")
    })

})

const PORT = process.env.PORT || 3000;


app.use(require('./routes'))

// app.get('/', function (req, res) {
//   res.render('home')
// })

require('./connection')
  .sync()
  .then(() => server.listen(PORT, () => console.log("http://localhost:3000")))
  .catch((err) => console.error(err));
