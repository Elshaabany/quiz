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
    <div
      className="container d-flex flex-column justify-content-center align-items-center text-center "
      style={{ minHeight: "100vh" }}
    >
      <div
        className="w-50 p-5 border border-primary-subtle rounded bg-white"
        style={{ minHeight: "400px" }}
      >
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
    </div>
  );
}

export default Quiz;
