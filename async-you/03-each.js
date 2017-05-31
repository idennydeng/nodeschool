const async = require('async');
const fetchUrl = require('./fetch-url');

async.each(process.argv.slice(2), fetchUrl, (err) => {
    if (err) console.error(err);
});
