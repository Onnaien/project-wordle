import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults/";
import WonBanner from "../WonBanner/WonBanner";
import LostBanner from "../LostBanner/LostBanner";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [gameStatus, setGameStatus] = React.useState("active");
  const [guessResult, setGuessResult] = React.useState([]);

  const updateGuessResult = (guess) => {
    const nextGuessResult = [...guessResult, guess];
    setGuessResult([...guessResult, guess]);

    if (guess === answer) {
      setGameStatus("won");
    } else if (nextGuessResult.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost");
    }
  };
  return (
    <>
      <GuessResults guessResult={guessResult} answer={answer} />
      <GuessInput
        gameStatus={gameStatus}
        updateGuessResultHandle={updateGuessResult}
      />
      {gameStatus === "won" && <WonBanner numOfGuesses={guessResult.length} />}
      {gameStatus === "lost" && <LostBanner answer={answer} />}
    </>
  );
}

export default Game;
