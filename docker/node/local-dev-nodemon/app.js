const express = require('express');
const winston = require('winston');
const bodyParser = require('body-parser');
const { info } = require('console');

const port = process.env.PORT || '5000';
const app = express();

const logger = winston.createLogger({
	level: 'info',
	format: winston.format.simple(),
	defaultMeta: { service: 'user-service' },
	transports: [new winston.transports.Console()],
});

app.use(bodyParser.json());

app.use((req, res, next) => {
	const { method, url } = req;
	logger.info(`method: ${method}, url: ${url}`);
	next();
});

app.get('/', (req, res) => {
	res.send('hello');
});

app.listen(port, () => {
	console.log(`server listening on port ${port}`);
});
