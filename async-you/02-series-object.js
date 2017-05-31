const async = require('async');
const fetchUrl = require('./fetch-url');

async.series({
    requestOne: fetchUrl.bind(null, process.argv[2]),
    requestTwo: fetchUrl.bind(null, process.argv[3]),
}, (err, result) => {
    if (err) {
        console.error(err);
    } else {
        console.log(result);
    }
});
