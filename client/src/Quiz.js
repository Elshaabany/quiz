import { useState } from "react";
import Practice from "./Practice";
import Rank from "./Rank";

function Quiz() {
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [score, setScore] = useState(0);
  const [quizRestarted, setQuizRestarted] = useState(false);
  const [wordsLength, setWordsLength] = useState(0);

  function restartQuiz() {
    setQuizCompleted(false);
    setScore(0);
    setQuizRestarted(false);
    setWordsLength(0);
  }

  return (
    <div>
      <h1>Quiz</h1>
      {quizCompleted ? (
        <Rank
          score={score}
          restartQuiz={restartQuiz}
          wordsLength={wordsLength}
        />
      ) : (
        <Practice
          setQuizCompleted={setQuizCompleted}
          score={score}
          setScore={setScore}
          quizRestarted={quizRestarted}
          wordsLength={wordsLength}
          setWordsLength={setWordsLength}
        />
      )}
    </div>
  );
}

export default Quiz;
