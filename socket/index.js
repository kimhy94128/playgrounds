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
const io = socket(server);

io.on('connection', (socket) => {
  console.log('사용자 접속');
})