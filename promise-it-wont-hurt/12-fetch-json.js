// const http = require('http');
// http.get('http://localhost:1337/', (res) => {
//     const { statusCode } = res;
//     if (statusCode === 200) {
//         let rawData = '';
//         res.setEncoding('utf8');
//         res.on('data', chunk => rawData += chunk);
//         res.on('end', () => console.log(JSON.parse(rawData)));
//     }
// });

const http = require('q-io/http');

http.read('http://localhost:1337/')
    .then(JSON.parse)
    .then(console.log, console.log)
    .done();
