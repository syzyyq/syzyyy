var http = require('http');
http.createServer(function (request, Response) {
    Response.writeHead(200, {'Content-Type': 'text/plain'});
    Response.end('Hello world\n');
}).listen(4444);
console.log('Server running at http://127.0.0.1:4444/');
