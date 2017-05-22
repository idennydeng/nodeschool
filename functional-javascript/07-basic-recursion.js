module.exports = (arr, fn, initial) => {
    const len = arr.length;
    return ((function reduceOne(value, index) {
        if (index >= len) return value;
        return reduceOne(fn(value, arr[index], index, arr), index + 1);
    })(initial, 0));
};
