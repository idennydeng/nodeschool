const promise = new Promise(function (resolve) {
    resolve('PROMISE VALUE');
});

promise.then(console.log);
console.log('MAIN PROGRAM');
