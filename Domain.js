//Provides a way to handle unhandled errors in Node.js. Example:

const domain = require('domain');

const server = require('http').createServer();

const myDomain = domain.create();

myDomain.on('error', (err) => {
  console.error(`Caught exception: ${err}`);
});

myDomain.run(() => {
  server.on('request', (req, res) => {
    const d = domain.create();
    d.add(req);
    d.add(res);
    d.on('error', (err) => {
      console.error(`Error: ${err}`);
      try {
        res.writeHead(500);
        res.end(`Error: ${err}`);
      } catch (e) {
        console.error(`Error sending 500: ${e}`);
      }
    });
    // Rest of request handling code...
  });

  server.listen(8000);
});
