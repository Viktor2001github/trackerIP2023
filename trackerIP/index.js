const http = require('http');

const hostname = '0.0.0.0';
const port = 8080;

const server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	const ipAddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
	res.end("Your IP Adress:" + ` ${ipAddress}`);
});

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});

