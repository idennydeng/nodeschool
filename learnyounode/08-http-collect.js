const http = require('http');

http.get(process.argv[2], (res) => {
    res.setEncoding('utf8');

    let content = '';
    res.on('data', (chunk) => {
        content += chunk;
    });
    res.on('end', () => {
        console.log(content.length);
        console.log(content);
    });
    res.on('error', console.error);
}).on('error', console.error);
