const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

app.get('/', (req, res, next) => {
	res.sendFile(__dirname, '/public/index.html');
});

app.use(express.static('public'));

io.on('connection', (client) => {
	console.log('Client connected.');

	client.on('join', (data) => {
		console.log(data);
	});

	client.on('messages', (data) => {
		client.emit('thread', data);
		client.broadcast.emit('thread', data);
	});
});

server.listen(7777);