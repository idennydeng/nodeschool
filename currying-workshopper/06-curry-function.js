module.exports = fn => function curried(...args) {
    if (args.length >= fn.length) return fn(...args);
    return curried.bind(null, ...args);
};
