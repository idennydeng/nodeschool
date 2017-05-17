const fs = require('fs');
const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    fs.createReadStream(process.argv[3]).pipe(res);
}).listen(Number(process.argv[2]));
