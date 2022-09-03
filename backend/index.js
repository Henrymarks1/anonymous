const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get('/', (req, res) => {
  console.log("The Anonymous api created by Henry Marks and Andy Negrut")
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    console.log(`${socket.id} has connected`)
    socket.on('roomId', (roomId) => {
        console.log("Joining room: ", roomId)
        io.socketsJoin(roomId)
        console.log(socket.rooms);
        //io.serverSideEmit("", "world");
      });    
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});

