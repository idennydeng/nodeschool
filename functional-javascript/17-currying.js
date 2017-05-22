function curryN(fn, n) {
    n = n || fn.length;

    return function curriedN(...args) {
        if (args.length === n) return fn(...args);
        return curriedN.bind(null, ...args);
    };
}

module.exports = curryN;
