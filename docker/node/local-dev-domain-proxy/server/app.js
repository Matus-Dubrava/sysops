const express = require('express');
const port = 5000;
const app = express();

app.get('/', (req, res) => {
	res.send('HELLO custom app');
});

app.listen(port, () => {
	console.log(`server listening on port ${port}`);
});
