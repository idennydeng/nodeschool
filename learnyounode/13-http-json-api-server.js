const http = require('http');
const url = require('url');

class HttpAPI {
    constructor() {
        this.apis = {};
    }
    get(path, callback) {
        this.apis[path] = callback;
    }
    run(port) {
        const apis = this.apis;
        http.createServer((req, res) => {
            const parseUrl = url.parse(req.url, true);
            const callback = apis[parseUrl.pathname];
            if (!callback) {
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end('Not Found');
            } else {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(callback.call(this, parseUrl.query)));
            }
        }).listen(port);
    }
}

const httpAPI = new HttpAPI();
httpAPI.get('/api/parsetime', (params) => {
    const time = new Date(params.iso);
    return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds(),
    };
});

httpAPI.get('/api/unixtime', (params) => {
    const time = new Date(params.iso);
    return { unixtime: time.getTime() };
});
httpAPI.run(Number(process.argv[2]));
