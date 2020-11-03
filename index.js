const express = require('express');
const app = express();
require("dotenv").config();

const port = 5000;

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('몽고디비 연결성공'))
  .catch(err => console.log(err))


app.get('/', (req, res) => {
  res.send('success!');
});

app.listen(port, () => console.log(`${port}번 포트에서 실행`));
