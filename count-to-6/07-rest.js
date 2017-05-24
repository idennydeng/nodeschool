module.exports = (...numbers) => {
    const total = numbers.reduce((initial, n) => initial + n, 0);
    return total / numbers.length;
};
