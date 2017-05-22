module.exports = (...numbers) => {
    const total = numbers.reduce((total, n) => total + n, 0);
    return total / numbers.length;
}
