import express from 'express';
import { readFileSync } from 'fs';
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

app.get('/words', (req, res) => {
	const words = randWords(wordList);
	res.json({ words });
});
app.listen(5000, () => {
	console.log('app is running at http://localhost:5000 ');
});
