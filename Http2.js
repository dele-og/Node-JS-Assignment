//Provides a way to create HTTP/2 servers and make HTTP/2 requests in Node.js. Example:

const http2 = require('http2');

const server = http2.createSecureServer({
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
});

server.on('stream', (stream, headers) => {
  stream.respond({
    'content-type': 'text/html',
    ':status': 200
  });
  stream.end('<h1>Hello, world!</h1>');
});

server.listen(8000);
