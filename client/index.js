export function createRoom(socket) {
  console.log("testing!")
  var form = document.getElementById("form");
  var input = document.getElementById("input");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (input.value) {
      socket.emit("roomId", input.value);
      input.value = "";
    }
  });

  socket.on("joined-room", (roomId) => {
    console.log("joined-room: ", roomId);
    messageInRoom(socket);
    location.href = "/question.html";
  });
}

function messageInRoom(socket) {
  var messages = document.getElementById("messages");
  var form = document.getElementById("form");
  var input = document.getElementById("input");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (input.value) {
      socket.emit("question", input.value);
      input.value = "";
    }
  });

  //getting the input of the questions and creating a new element
  socket.on("question", function (question) {
    var item = document.createElement("li");
    item.textContent = question;
    messages.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
  });
}
