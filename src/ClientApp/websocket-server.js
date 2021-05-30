const { Server } = require('mock-socket');
const server = new Server('ws://localhost:8080');
window.SocketServer = server;
