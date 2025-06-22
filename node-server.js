var http = require('http');
http.createServer(function (request, response) {
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.end('I am a node server!\n');
}).listen(3000, '127.0.0.1');
