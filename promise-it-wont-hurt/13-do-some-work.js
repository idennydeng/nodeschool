const http = require('q-io/http');

http.read('http://localhost:7000/')
    .then(id => http.read(`http://localhost:7001/?id=${id}`))
    .then(JSON.parse)
    .then(console.log, console.log)
    .done();
