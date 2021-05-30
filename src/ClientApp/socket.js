const { chromium } = require('playwright');
const { Server, WebSocket } = require('mock-socket');

// class Server2 {
//   constructor() {
//     console.log('server2 constructor')
//   }

//   speak() {
//     console.log('speak')
//   }
// }


(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();

  // Open new page
  const page = await context.newPage();
  //const server = new Server('ws://localhost:8080');

  //const mockSocket = new WebSocket('ws://localhost:8080');

  // mockSocket.onopen = function open(event) {
  //   console.log('ws open', event)
  // };

  //const server3 = new Server2();

  //await page.addInitScript(() => server3.speak())

  //await page.addInitScript({ path: './server3.ts' });
  //await page.addInitScript({ path: './websocket-server.js' });
  await page.addInitScript({ path: './websocket-server.bundle.js' });

  // page.addInitScript(() => {
  //   console.log('playwright init')
  //   const { Server, WebSocket } = require('mock-socket');

  //   window.WebSocket = WebSocket;

  //   const server2 = new Server2();

  //   const server = new Server('ws://localhost:8080');
  // });

  // Go to http://localhost:4200/
  await page.goto('http://localhost:4200/');

  await page.evaluate(() => {
    window.SocketServer.on('connection', socket => {
      socket.on('message', (message) => {console.log('message from client2', message)});
      socket.on('close', () => {});

      socket.send('message from server2');

      window.MockSocket = socket;
    });
  });

  await page.evaluate(() => window.speak());


  // Click text=Activities
  await Promise.all([
    page.waitForNavigation(/*{ url: 'http://localhost:4200/activities' }*/),
    page.click('text=Activities')
  ]);

  await page.evaluate(() => window.MockSocket.send('message from playwright'));

  // Close page
  await page.close();

  // ---------------------
  await context.close();
  await browser.close();
})();
