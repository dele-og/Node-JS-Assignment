//A library that enables real-time, bidirectional, and event-based communication between the browser and the server. Example:

const server = require('http').createServer();
const io = require('socket.io')(server);

io.on('connection', (socket) => {
  console.log('A user connected');
  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
  });
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
