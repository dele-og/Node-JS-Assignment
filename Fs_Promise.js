// Provides a way to work with the file system using promises in Node.js. Example:

const fsPromises = require('fs/promises');

fsPromises.readFile('/path/to/file', 'utf8')
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error(err);
  });
