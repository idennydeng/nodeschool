function addN(total, n) {
    if (n === undefined) return total;
    return addN.bind(null, total + n);
}
module.exports = n => addN(0, n);
