import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";
function Guess({ guessResult, answer }) {
  console.log({ guessResult, answer });
  const guesses = guessResult.length;
  return (
    <div className="guess-results">
      {range(guesses).map((guess, index0) => {
        const letterStatus = checkGuess(guessResult[index0], answer);
        console.info({ letterStatus, guess, answer });
        return (
          <p key={index0} className="guess">
            {range(5).map((dummy, index1) => {
              return (
                <span
                  key={[index0, index1]}
                  className={`cell ${letterStatus[index1].status}`}
                >
                  {guessResult[index0].charAt(index1)}
                </span>
              );
            })}
          </p>
        );
      })}
      {range(NUM_OF_GUESSES_ALLOWED - guesses).map((guess, index0) => {
        const letterStatus = checkGuess(guessResult[index0], answer);
        console.info({ letterStatus, guess, answer });
        return (
          <p key={index0} className="guess">
            {range(5).map((dummy, index1) => {
              return <span key={[index0, index1]} className="cell "></span>;
            })}
          </p>
        );
      })}
    </div>
  );
}

export default Guess;
