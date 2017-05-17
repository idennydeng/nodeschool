const ls = require('./06-ls-module');

ls(process.argv[2], process.argv[3], (err, files) => {
    if (err) {
        console.log(err);
    } else {
        console.log(files.join('\n'));
    }
});
