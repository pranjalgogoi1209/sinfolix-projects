const http = require("http");
const express = require("express");
const cors = require("cors");
const socketIO = require("socket.io");

const app = express();
const port = 4500 || process.env.PORT;

app.use(cors());
// cors is used for intercommunication between urls

app.get("/", (req, res) => {
  res.send("HELL ITS WORKING");
});

const server = http.createServer(app);

const io = socketIO(server);

io.on("connection", () => {
  console.log("New Connection");
});

server.listen(port, () => {
  console.log(`server is working on http://localhost:${port}`);
});
