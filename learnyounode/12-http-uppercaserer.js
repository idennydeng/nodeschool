const http = require('http');
const stream = require('stream');

const upperTransform = new stream.Transform({
    transform(chunk, encoding, callback) {
        callback(null, chunk.toString().toUpperCase());
    },
});

http.createServer((req, res) => {
    if (req.method !== 'POST') {
        res.end('send a post request!');
    } else {
        req.pipe(upperTransform).pipe(res);
    }
}).listen(Number(process.argv[2]));
