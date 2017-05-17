const http = require('http');

function httpGet(url, endCallback) {
    http.get(url, (res) => {
        res.setEncoding('utf8');

        let content = '';
        res.on('data', (chunk) => {
            content += chunk;
        });
        res.on('end', () => {
            console.log(content);
            if (endCallback) endCallback();
        });
        res.on('error', console.error);
    }).on('error', console.error);
}

httpGet(process.argv[2],
    () => httpGet(process.argv[3],
        () => httpGet(process.argv[4])));
