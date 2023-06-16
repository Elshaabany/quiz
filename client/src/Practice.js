import { useState, useEffect } from "react";
const choices = ["noun", "adverb", "adjective", "verb"];

const Practice = () => {
  const [words, setWords] = useState([]);
  const [wordIndex, setWordIndex] = useState(0);

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

  const currentWord = words[wordIndex];

  if (!currentWord) return <h2>loading...</h2>;

  return (
    <>
      <h2>{currentWord.word}</h2>
      {choices.map((choice) => (
        <button>{choice}</button>
      ))}
    </>
  );
};

export default Practice;
