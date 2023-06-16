const choices = ["noun", "adverb", "adjective", "verb"];

const Practice = () => {
  return (
    <>
      <h2>word</h2>
      {choices.map((choice) => (
        <button>{choice}</button>
      ))}
    </>
  );
};

export default Practice;
