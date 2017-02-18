const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

app.get('/', (req, res, next) => {
	res.sendFile(__dirname, '/public/index.html');
});

app.use(express.static('public'));

server.listen(7777);