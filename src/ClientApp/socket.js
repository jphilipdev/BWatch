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

  const page = await context.newPage();

  await page.addInitScript({ path: './websocket-server.bundle.js' });

  await page.goto('http://localhost:4200/');

  await page.evaluate(() => {
    window.SocketServer.on('connection', socket => {
      window.MockSocket = socket;
      window.SocketReceivedMessages = [];

      socket.on('message', message => window.SocketReceivedMessages.push(message));
    });
  });

  // Click text=Activities
  await Promise.all([
    page.waitForNavigation(/*{ url: 'http://localhost:4200/activities' }*/),
    page.click('text=Activities')
  ]);

  await page.evaluate(() => window.MockSocket.send('message from playwright'));

  const socketReceivedMessages = await page.evaluate(() => window.SocketReceivedMessages);

  console.log('asserting messages', socketReceivedMessages);

  // Close page
  await page.close();

  // ---------------------
  await context.close();
  await browser.close();
})();
