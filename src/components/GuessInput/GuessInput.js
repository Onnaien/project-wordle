import React from "react";

function GuessInput({ gameStatus, updateGuessResultHandle }) {
  const [guess, setGuess] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ guess });
    updateGuessResultHandle(guess);
    setGuess("");
  };

  return (
    <div>
      <form className="guess.input-wrapper" onSubmit={handleSubmit}>
        <label htmlFor="guess-input">Enter guess: </label>
        <input
          id="guess-input"
          type="text"
          disabled={gameStatus !== "active"}
          pattern="[A-Z,a-z]{5}"
          title="5 letter word"
          value={guess}
          onChange={(event) => {
            const nextGuess = event.target.value.toUpperCase();
            setGuess(nextGuess);
          }}
        />
      </form>
    </div>
  );
}

export default GuessInput;
