const async = require('async');
const fetchUrl = require('./fetch-url');

let count = 0;
let content = '';
async.whilst(() => content.indexOf('meerkat') === -1, (callback) => {
    fetchUrl(process.argv[2], (err, body) => {
        if (err) {
            callback(err);
        } else {
            count += 1;
            content = body;
            callback(null);
        }
    });
}, (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log(count);
    }
});
