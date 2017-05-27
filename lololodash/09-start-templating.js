const _ = require('lodash');

module.exports = _.template('Hello <%= name %> (logins: <%= login.length %>)');
