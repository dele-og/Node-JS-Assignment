//Provides a way to work with the file system in Node.js. Example:

const fs = require('fs');

fs.readFile('/path/to/file', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
  } else {
    console.log(data);
  }
});
