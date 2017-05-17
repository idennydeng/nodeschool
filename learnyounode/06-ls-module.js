const fs = require('fs');

function ls(path, ext, callback) {
    const regx = new RegExp(`.+\\.${ext}$`);

    fs.readdir(path, (err, files) => {
        if (err) {
            callback(err);
        } else {
            callback(null, files.filter(f => regx.test(f)));
        }
    });
}

module.exports = ls;
