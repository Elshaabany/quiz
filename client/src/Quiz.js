import { useState } from "react";
import Practice from "./Practice";

function Quiz() {
  const [quizCompleted, setQuizCompleted] = useState(false);

  return (
    <div>
      <h1>Quiz</h1>
      {quizCompleted ? (
        <p>rank screen</p>
      ) : (
        <Practice setQuizState={setQuizCompleted} />
      )}
    </div>
  );
}

export default Quiz;
