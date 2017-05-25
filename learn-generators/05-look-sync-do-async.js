const fs = require('fs');

function run(generator) {
    let it;
    const go = (err, result) => {
        if (err) it.throw(err);
        it.next(result);
    };

    it = generator(go);
    go();
}

function* readdir(done) {
    let firstFile;
    try {
        const dirFiles = yield fs.readdir('NoNoNoNo', done);
        firstFile = dirFiles[0];
    } catch (e) {
        firstFile = null;
    }
    console.log(firstFile);
}

run(readdir);
