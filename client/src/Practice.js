import { useState, useEffect } from "react";
const choices = ["noun", "adverb", "adjective", "verb"];

const Practice = ({
  setQuizCompleted,
  score,
  setScore,
  quizRestarted,
  wordsLength,
  setWordsLength,
}) => {
  const [words, setWords] = useState([]);
  const [wordIndex, setWordIndex] = useState(0);
  const [selectedChoice, setSelectedChoice] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("http://localhost:5000/words");
        const data = await response.json();
        setWords(data.words);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  useEffect(() => {
    setWords([]);
    setWordIndex(0);
    setSelectedChoice("");
  }, [quizRestarted]);

  setWordsLength(words.length);
  const currentWord = words[wordIndex];

  function handleChoice(choice) {
    setSelectedChoice(choice);
    if (choice === currentWord.pos) {
      setScore(score + 1);
    }
  }

  function handleNextQuestion() {
    if (wordIndex + 1 < wordsLength) {
      setWordIndex(wordIndex + 1);
      setSelectedChoice("");
    } else {
      setQuizCompleted(true);
    }
  }

  if (!currentWord) return <h2>loading...</h2>;

  return (
    <>
      <div>
        <p>score: {score}</p>
      </div>
      <div>
        <h2>{currentWord.word}</h2>
        {choices.map((choice) => (
          <button
            key={choice}
            onClick={() => handleChoice(choice)}
            disabled={selectedChoice !== ""}
          >
            {choice}
          </button>
        ))}
      </div>
      {selectedChoice && (
        <div>
          {currentWord.pos === selectedChoice ? <p>Correct!</p> : <p>Wrong!</p>}
          <button onClick={handleNextQuestion}>Next</button>
        </div>
      )}
    </>
  );
};

export default Practice;
