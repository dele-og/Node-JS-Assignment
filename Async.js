//Async: A module for managing asynchronous operations in Node.js. Example:

const async = require('async');

async.parallel([
    function(callback) {
        setTimeout(function() {
            callback(null, 'one');
        }, 200);
    },
    function(callback) {
        setTimeout(function() {
            callback(null, 'two');
        }, 100);
    }
],
// optional callback
function(err, results) {
    console.log(results);
    // the results array will equal ['one','two'] even though
    // the second function had a shorter timeout.
});
