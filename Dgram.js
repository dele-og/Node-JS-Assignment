//Provides a way to create UDP datagram sockets in Node.js. Example:

const dgram = require('dgram');

const server = dgram.createSocket('udp4');

server.on('message', (msg, rinfo) => {
  console.log(`Received message from ${rinfo.address}:${rinfo.port}: ${msg}`);
});

server.bind(41234);

