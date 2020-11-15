// express server setting
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const port = 5000;
server.listen(port, () => {
  console.log(port, '번 포트에서 서버 실행 중');
});
// express server setting

// socket setting
const socket = require('socket.io');
const io = socket(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});
// socket setting

io.on('connection', (socket) => {
  console.log('유저 접속');
})