export default function randWords(wordList) {
	const selectedWords = new Set();
	const requiredPos = ['adjective', 'adverb', 'noun', 'verb'];

	requiredPos.forEach((pos) => {
		const posArray = wordList.filter((word) => word.pos === pos);
		selectedWords.add(posArray[Math.floor(Math.random() * posArray.length)]);
	});

	while (selectedWords.size < 10) {
		selectedWords.add(wordList[Math.floor(Math.random() * wordList.length)]);
	}

	function shuffle(Words) {
		const array = [...Words];
		let m = array.length;
		let t;
		let i;

		while (m) {
			i = Math.floor(Math.random() * m--);
			t = array[m];
			array[m] = array[i];
			array[i] = t;
		}
		return array;
	}

	return shuffle(Array.from(selectedWords));
}
