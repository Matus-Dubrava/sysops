const express = require('express');
const { json } = require('body-parser');
const cors = require('cors');
const os = require('os');
const fs = require('fs');
const dns = require('dns');
const axios = require('axios');

const PORT = process.env.PORT;
const SERVICE_NAME = process.env.SERVICE_NAME;
const STORAGE_PATH = process.env.STORAGE_PATH;

if (!PORT) {
	throw new Error('PORT is not set');
}

if (!SERVICE_NAME) {
	throw new Error('SERVICE_NAME is not set');
}

if (!STORAGE_PATH) {
	throw new Error('STORAGE_PATH is not set');
}

const app = express();

app.use(json());
app.use(cors());

app.get('/api/storage/data', (req, res) => {
	let data = '';
	try {
		data = fs.readFileSync(`${STORAGE_PATH}/data.txt`);
	} catch (err) {}

	console.log(`fetching data from single pod ${os.hostname()}...`);
	return res.send(data);
});

app.get('/api/storage/', async (req, res) => {
	dns.resolveSrv(SERVICE_NAME, async (err, items) => {
		if (err) {
			console.log(err);
			return res.status(500).send('internal server error');
		}

		const podUrls = items.map((item) => item.name);
		const port = items[0].port;
		let messages = [];

		for (const pod of podUrls) {
			const response = await axios.get(
				`http://${pod}:${port}/api/storage/data`
			);
			messages = messages.concat(
				response.data.split('\n').filter((item) => item !== '')
			);
		}

		return res.send(messages);
	});
});

app.post('/api/storage', (req, res) => {
	const { message } = req.body;

	fs.appendFileSync(`${STORAGE_PATH}/data.txt`, message + '\n');

	console.log(`posting: ${message} to pod ${os.hostname()}...`);
	return res.send(`posting: ${message} to pod ${os.hostname()}...`);
});

app.listen(PORT, () => {
	console.log(`storage service listening on port ${PORT}`);
});
