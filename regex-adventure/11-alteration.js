module.exports = (str) => {
    const m = /\b(cat|dog|robot)\d+\b/.exec(str);
    return m && m[1];
};
