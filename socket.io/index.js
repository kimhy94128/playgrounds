const express = require('express');
const app = express();
const socket = require('socket.io');
const http = require('http').createServer(app);
const port = 5000;
const cors = require('cors')
const io = socket(http);

app.use(cors())

app.get('/', (req, res) => {
    res.send('Success');
})

let onUsers = 0;
io.on('connection', (socket) => {
    console.log('유저가 입장했습니다.')
    onUsers += 1;
    console.log('현재 유저는 ', onUsers, '명')
    socket.on('chat', (msg) => {
        console.log('message: ', msg)
        io.emit('chat', msg)
    })
    socket.on('disconnect', () => {
        console.log('유저가 퇴장했습니다.')
        onUsers -= 1;
        console.log('현재 유저는 ', onUsers, '명')
    })
})

http.listen(port, ()=>{
    console.log(`${port}번 포트에서 서버 실행`)
})
