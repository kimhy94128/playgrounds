const express = require('express');
const app = express();
const fs = require('fs');
const youtubedl = require('youtube-dl')


app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
})

app.post('/download', (req, res) => {
  const { url } = req.body;
  const videoTitle = 'test.mp4'
  const video = youtubedl(url, ['--format', 137])
  video.on('info', function(info) {
    console.log('Download started')
    console.log('filename: ' + info._filename)
    console.log('size: ' + info.size)
  })
  
  video.pipe(fs.createWriteStream(videoTitle))
})

app.listen(3000);