import express from 'express';
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
	console.log(new String(req.headers));
	res.send('Hello World!');
});

app.listen(PORT, () => {
	console.log('server listenning at http://localhost:' + PORT);
});
