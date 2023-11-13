import React from "react";

function GuessResults({ guessResult }) {
  console.log({ guessResult });
  return (
    <div className="guess-results">
      {guessResult.map((guess, index) => {
        return (
          <p key={index} className="guess">
            {guess}
          </p>
        );
      })}
    </div>
  );
}

export default GuessResults;
