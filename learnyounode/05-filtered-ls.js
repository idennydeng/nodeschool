const fs = require('fs');

const path = process.argv[2];
const regx = new RegExp(`.+\\.${process.argv[3]}$`);

fs.readdir(path, (err, files) => {
    if (err) {
        console.log(err);
    } else {
        files.forEach((f) => {
            if (regx.test(f)) console.log(f);
        });
    }
});
