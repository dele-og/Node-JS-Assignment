// Provides a set of constants used by Node.js. Example:

const fs = require('fs');

fs.access('/path/to/file', fs.constants.F_OK, (err) => {
  if (err) {
    console.error('File does not exist');
  } else {
    console.log('File exists');
  }
});
