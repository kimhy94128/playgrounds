// express 서버 설정
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const port = 5000
server.listen(port, () => {
  console.log(port, '번 포트에서 서버 실행');
})

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

// socket 설정
const socket = require('socket.io');
const io = socket(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

let count = 0;
io.on('connection', (socket) => {
  count += 1
  console.log('유저 입장');
  console.log('현재 사용자', count, '명');

  socket.on('msg', (msg) => {
    console.log(msg);
    io.emit('msg', msg)
  })

  socket.on('disconnect', () => {
    count -= 1
    console.log('유저 퇴장');
    console.log('현재 사용자', count, '명');
  })
})