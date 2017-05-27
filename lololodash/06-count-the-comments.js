const _ = require('lodash');

module.exports = comments => _.chain(comments)
    .groupBy('username')
    .map((arr, name) => ({ username: name, comment_count: _.size(arr) }))
    .sortBy(item => -item.comment_count);
