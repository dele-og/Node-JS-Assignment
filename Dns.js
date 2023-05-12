//Provides a way to perform DNS lookups in Node.js. Example:

const dns = require('dns');

dns.lookup('example.com', (err, address, family) => {
  console.log(`Address: ${address}, family: ${family}`);
});
