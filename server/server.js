import express from 'express';
import * as fs from 'fs';

const data = (() => {
	try {
		return fs.readFileSync('TestData.json', 'utf8');
	} catch (err) {
		console.error('fatal error: data access denied');
		throw err;
	}
})();

const app = express();

app.use(express.json());

app.listen(5000, () => {
	console.log('app is running at http://localhost:5000 ');
});
