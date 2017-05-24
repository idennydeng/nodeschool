const promise = new Promise(resolve => resolve('PROMISE VALUE'));

promise.then(console.log);
console.log('MAIN PROGRAM');
