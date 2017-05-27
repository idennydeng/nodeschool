const _ = require('lodash');

module.exports = items => _.filter(items, { active: true });
