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
  const progress = ((wordIndex + 1) / wordsLength) * 100;

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

  if (!currentWord)
    return (
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    );

  return (
    <>
      <div>
        <div className="progress">
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: `${progress}%` }}
            aria-valuenow={progress}
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <p>score: {score}</p>
      </div>
      <div className="">
        <h2>{currentWord.word}</h2>
        <div className="btn-group mb-3">
          {choices.map((choice) => (
            <button
              className="btn btn-primary me-2"
              key={choice}
              onClick={() => handleChoice(choice)}
              disabled={selectedChoice !== ""}
            >
              {choice.charAt(0).toUpperCase() + choice.slice(1)}{" "}
            </button>
          ))}
        </div>
      </div>
      {selectedChoice && (
        <div>
          {currentWord.pos === selectedChoice ? <p>Correct!</p> : <p>Wrong!</p>}
          <button className="btn btn-secondary" onClick={handleNextQuestion}>
            Next
          </button>
        </div>
      )}
    </>
  );
};

export default Practice;
