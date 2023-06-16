import { useState } from "react";
import Practice from "./Practice";
import Rank from "./Rank";

function Quiz() {
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [score, setScore] = useState(0);
  const [quizRestarted, setQuizRestarted] = useState(false);

  function restartQuiz() {
    setQuizCompleted(false);
    setScore(0);
    setQuizRestarted(false);
  }

  return (
    <div>
      <h1>Quiz</h1>
      {quizCompleted ? (
        <Rank score={score} restartQuiz={restartQuiz} />
      ) : (
        <Practice
          setQuizCompleted={setQuizCompleted}
          score={score}
          setScore={setScore}
          quizRestarted={quizRestarted}
        />
      )}
    </div>
  );
}

export default Quiz;
