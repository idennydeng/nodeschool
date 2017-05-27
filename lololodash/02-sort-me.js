const _ = require('lodash');

module.exports = items => _.sortBy(items, item => -item.quantity);
