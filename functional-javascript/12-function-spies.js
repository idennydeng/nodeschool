module.exports = (target, method) => {
    const retsult = { count: 0 };
    const callback = target[method];

    target[method] = (...args) => {
        callback.apply(target, args);
        ++retsult.count;
    };
    return retsult;
};
