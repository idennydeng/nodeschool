Promise.resolve(1)
    .then(n => Promise.reject(new Error(n)))
    .catch(err => console.log(err.message))
    .then(() => console.log('done'));
