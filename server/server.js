import express from 'express';
import { readFileSync } from 'fs';
import cors from 'cors';
import randWords from './randomWords.js';

const { wordList, scoresList } = (() => {
	try {
		return JSON.parse(readFileSync('TestData.json', 'utf8'));
	} catch (err) {
		console.error('fatal error: data access denied');
		throw err;
	}
})();

const app = express();

app.use(express.json());
app.use(cors());

app.get('/words', (req, res, next) => {
	const words = randWords(wordList);
	if (words.length === 0) next({ status: 500, msg: 'Internal Server Error' });
	res.json({ words });
});

app.post('/rank', (req, res, next) => {
	const achivedScore = +req.body.score;
	if (!achivedScore) next({ status: 400, msg: 'enter valid score' });
	const scoresBlow = scoresList.filter((score) => score < achivedScore);
	res.json({ rank: Math.floor((scoresBlow.length / scoresList.length) * 100) });
});

app.use((err, req, res, next) => {
	res.status(err.status).json({ error: err.msg });
});

app.listen(5000, () => {
	console.log('app is running at http://localhost:5000 ');
});
