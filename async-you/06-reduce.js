const async = require('async');
const fetchUrl = require('./fetch-url');

async.reduce(['one', 'two', 'three'], 0, (memo, item, callback) => {
    fetchUrl(`${process.argv[2]}?number=${item}`, (err, num) => {
        if (err) {
            callback(err);
        } else {
            callback(null, Number(num) + memo);
        }
    });
}, (err, result) => {
    if (err) {
        console.error(err);
    } else {
        console.log(result);
    }
});
