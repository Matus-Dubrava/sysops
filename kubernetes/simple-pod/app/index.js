const http = require('http');
const os = require('os');

const PORT = 8080;

const handler = (req, res) => {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.write(os.hostname());
	res.end();
};

const server = http.createServer(handler);

server.listen(PORT, () => {
	console.log(`server listening on port ${PORT}`);
});
