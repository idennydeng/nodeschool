const _ = require('lodash');

module.exports = words => _.chain(words)
    .map(word => `${word.toUpperCase()}CHAINED`)
    .sortBy()
    .value();
