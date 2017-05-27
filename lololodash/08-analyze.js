const _ = require('lodash');

module.exports = (items) => {
    const total = _.reduce(items, (memo, item) => memo + item.income, 0);

    const result = {
        average: total / items.length,
        underperform: [],
        overperform: [],
    };

    _.forEach(_.sortBy(items, 'income'), (item) => {
        if (item.income > result.average) {
            result.overperform.push(item);
        } else {
            result.underperform.push(item);
        }
    });

    return result;
};
