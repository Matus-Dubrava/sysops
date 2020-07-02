const express = require('express');
const app = express();
const port = process.env.PORT || '5000';

const message = process.env.MESSAGE || 'default server';

app.get('/', (req, res) => {
	res.send(message);
});

app.listen(port, () => {
	console.log(`server listening in port ${port}`);
});
