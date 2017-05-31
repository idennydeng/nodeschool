const async = require('async');
const fetchUrl = require('./fetch-url');

async.map(process.argv.slice(2), fetchUrl, (err, result) => {
    if (err) {
        console.error(err);
    } else {
        console.log(result);
    }
});
