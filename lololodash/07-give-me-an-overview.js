const _ = require('lodash');

module.exports = items => _.sortBy(_.values(_.reduce(items, (ret, item) => {
    const article = item.article;
    const quantity = item.quantity;
    if (ret[article]) {
        ret[article].total_orders += quantity;
    } else {
        ret[article] = { article, total_orders: quantity };
    }
    return ret;
}, {})), item => -item.total_orders);
