const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.use("/", express.static("../client/"));

io.on("connection", (socket) => {
  console.log(`${socket.id} has connected`);

  //Joining a room, and alerting the client
  socket.on("roomId", (roomId) => {
    console.log("Joining room: ", roomId);
    io.socketsJoin(roomId);
    console.log(socket.rooms);
    socket.emit("joined-room", roomId);
  });

  //Send a question to the chat
  socket.on("question", (msg) => {
    console.log("question: " + msg);
    io.emit("question", msg);
  });
});

server.listen(3000, () => {
  console.log("listening on *:3000");
});
