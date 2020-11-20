const fs = require('fs');
const youtubedl = require('youtube-dl')
const url = 'https://www.youtube.com/watch?v=Il-an3K9pjg'

const video = youtubedl(url, ['--format', 133])
const videoTitle = 'Anne-marie - 2002.mp4'

const ffmpeg = require('fluent-ffmpeg');

ffmpeg('./test.mp4')
  .input('./Anne-Marie - 2002 [Official Video]-Il-an3K9pjg.mp3')
  .on('end', function() {
    console.log('file has been converted succesfully');
  })
  .on('error', function(err) {
    console.log('an error happened: ' + err.message);
  })
  .save('./success.mp4');


// 비디오 다운
video.on('info', function(info) {
  console.log('Download started')
  console.log('filename: ' + info._filename)
  console.log('size: ' + info.size)
})

video.pipe(fs.createWriteStream(videoTitle))


// 오디오
youtubedl.exec(url, ['-x', '--audio-format', 'mp3'], {}, function exec (
  err,
  output
) {
  'use strict'
  if (err) {
    throw err
  }
  console.log(output.join('\n'))
})
