module.exports = (arr, fn, thisArg) =>
    arr.reduce((initial, item, index) =>
        initial.concat([fn.call(thisArg, item, index, arr)]), []);
