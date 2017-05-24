const promise = new Promise(resolve => setTimeout(() => resolve('FULFILLED!'), 300));
promise.then(console.log);
