//The Node.js inspector module provides a way to debug Node.js applications using the Chrome DevTools protocol. It allows developers to use the same set of debugging tools and techniques that are used to debug client-side JavaScript code in web browsers.


const inspector = require('inspector');
const session = new inspector.Session();

session.connect();

session.post('Runtime.evaluate', { expression: 'console.log("Hello, world!")' }, (err, result) => {
  if (err) {
    console.error(err);
  } else {
    console.log(result);
  }
});

session.disconnect();
