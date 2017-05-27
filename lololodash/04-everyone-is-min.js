const _ = require('lodash');

module.exports = cities => _.reduce(cities, (result, val, key) => {
    if (_.every(val, t => t >= 19)) {
        result.hot.push(key);
    } else if (_.some(val, t => t >= 19)) {
        result.warm.push(key);
    }
    return result;
}, { hot: [], warm: [] });
