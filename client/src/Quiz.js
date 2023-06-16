import { useState } from "react";
import Practice from "./Practice";
import Rank from "./Rank";

function Quiz() {
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [score, setScore] = useState(0);

  return (
    <div>
      <h1>Quiz</h1>
      {quizCompleted ? (
        <Rank score={score} />
      ) : (
        <Practice
          setQuizCompleted={setQuizCompleted}
          score={score}
          setScore={setScore}
        />
      )}
    </div>
  );
}

export default Quiz;
