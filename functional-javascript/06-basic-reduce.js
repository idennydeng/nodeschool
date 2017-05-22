module.exports = words => words.reduce((initial, word) => {
    initial[word] = ++initial[word] || 1;
    return initial;
}, {});
