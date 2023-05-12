// Provides cryptographic functionality, including encryption, decryption, hashing, and more. Example:

const crypto = require('crypto');

const hash = crypto.createHash('sha256');
hash.update('hello, world');
console.log(hash.digest('hex')); // Output: a591a6d40bf420404a011733cfb7b190d62c65bf0bcda32b57b277d9ad9f146
