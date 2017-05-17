const net = require('net');
const moment = require('moment');

const TIME_FORMAT = 'YYYY-MM-DD hh:mm';
const server = net.createServer((socket) => {
    socket.end(`${(moment().format(TIME_FORMAT))}\n`);
});
server.listen(Number(process.argv[2]));
