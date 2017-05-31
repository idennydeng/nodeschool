const fs = require('fs');
const async = require('async');
const fetchUrl = require('./fetch-url');

async.waterfall([
    fs.readFile.bind(fs, process.argv[2], { encoding: 'utf8' }),
    fetchUrl,
], (err, result) => {
    if (err) {
        console.error(err);
    } else {
        console.log(result);
    }
});
