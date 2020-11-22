const express = require('express')
const app = express();
const port = 5000
app.listen(port, () => {
  console.log(port, '번 포트에서 서버 실행');
})

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
})

app.post('/download', (req, res) => {
console.log(req.body);
  res.redirect('/')
})