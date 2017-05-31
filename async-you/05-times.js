const http = require('http');
const async = require('async');
const fetchUrl = require('./fetch-url');

const [hostname, port] = process.argv.slice(2, 4);
const usersUrl = `http://${hostname}:${port}/users`;

const createUser = (data, callback) => {
    http.request({
        path: '/users/create',
        method: 'POST',
        hostname,
        port,
    }, (res) => {
        let content = '';
        res.setEncoding('utf8');
        res.on('data', chunk => (content += chunk));
        res.on('end', () => callback(null, content));
    }).on('error', callback).end(JSON.stringify(data));
};

async.times(5, (n, next) => {
    createUser({ user_id: n + 1 }, next);
}, () => {
    fetchUrl(usersUrl, (err, users) => !err && console.log(users));
});
