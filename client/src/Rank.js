import { useState } from "react";

function Rank({ score, restartQuiz, wordsLength }) {
  const [rank, setRank] = useState("");
  (async () => {
    try {
      const response = await fetch("http://localhost:5000/rank", {
        method: "POST",
        body: JSON.stringify({ score: (+score / wordsLength) * 100 }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setRank(data.rank);
    } catch (error) {
      console.log(error);
    }
  })();

  if (!rank) return <h2>loading...</h2>;

  return (
    <>
      <h2>Completed!</h2>
      <p>your Rank: {rank}</p>
      <button onClick={restartQuiz}>Try Again</button>
    </>
  );
}

export default Rank;
