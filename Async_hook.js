//Provides an API for tracking the lifetime of asynchronous resources created inside a Node.js application. Example:

const async_hooks = require('async_hooks');

const asyncHook = async_hooks.createHook({
  init(asyncId, type, triggerAsyncId, resource) {
    console.log(`Init asyncId: ${asyncId}`);
  },
  destroy(asyncId) {
    console.log(`Destroy asyncId: ${asyncId}`);
  }
});

asyncHook.enable();

setTimeout(() => {
  console.log('Timeout complete');
}, 1000);
