//Provides a way to work with binary data directly in memory. Example:

const buffer = Buffer.from('hello world', 'utf8');

console.log(buffer.toString('hex')); // Output: 68656c6c6f20776f726c64
