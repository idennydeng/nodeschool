const hasOwnProperty = Object.prototype.hasOwnProperty;
module.exports = (...args) => args.filter(obj => hasOwnProperty.call(obj, 'quack')).length;
