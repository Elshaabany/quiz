import { useEffect, useState } from "react";
import Loading from "./loading";
import Error from "./error";

function Rank({ score, restartQuiz, wordsLength }) {
  const [rank, setRank] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
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
        setError("Internal server Error");
      }
    })();
  }, [score, wordsLength]);

  if (error) return <Error errorText={"Internal server Error"} />;
  if (!rank) return <Loading />;

  return (
    <>
      <h2>Completed!</h2>
      <p>your Rank: {rank}</p>
      <button className="btn btn-success" onClick={restartQuiz}>
        Try Again
      </button>
    </>
  );
}

export default Rank;
