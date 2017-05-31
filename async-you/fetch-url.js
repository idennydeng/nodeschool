const http = require('http');

module.exports = (url, callback) => {
    http.get(url, (res) => {
        let content = '';
        res.setEncoding('utf8');
        res.on('data', chunk => (content += chunk));
        res.on('end', () => callback(null, content));
    }).on('error', callback);
};
