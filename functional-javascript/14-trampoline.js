function trampoline(fn) {
    while (typeof fn === 'function') {
        fn = fn();
    }
}

function repeat(operation, num) {
    if (num <= 0) return null;
    operation();
    return repeat.bind(null, operation, --num);
}

module.exports = (operation, num) => trampoline(repeat(operation, num));
