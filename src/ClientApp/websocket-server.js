const { Server, WebSocket } = require('mock-socket');

class Server3 {
  constructor() {
    console.log('server 3 constructor')
  }

  speak() {
    console.log('speaking');
  }
}

const server3 = new Server3();

window.speak = server3.speak;

server3.speak();

const server = new Server('ws://localhost:8080');

window.SocketServer = server;


server.on('connection', socket => {
    socket.on('message', (message) => {console.log('message from client', message)});
    socket.on('close', () => {});

    socket.send('message from server');
    socket.close();
  });
