// http 모듈을 이용하여 간단한 서버 실행

const http = require('http');

http.createServer((req, res) => {

  if(req.method === 'GET' && req.url === '/'){
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Hello World</h1>');
  } else {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Path is '+ req.url +'</h1>');
  }
}).listen(3000);