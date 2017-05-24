function all(promise1, promise2) {
    return new Promise((resolve, reject) => {
        let count = 0
        const args = [];
        const collect = function (index, arg) {
            args[index] = arg;
            count += 1;
            if (count >= 2) resolve(args);
        };

        promise1.then(collect.bind(this, 0), reject);
        promise2.then(collect.bind(this, 1), reject);
    });
}

all(getPromise1(), getPromise2()).then(console.log);
