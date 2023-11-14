import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults/";
import Guess from "../Guess/Guess";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessResult, setGuessResult] = React.useState([]);
  const updateGuessResult = (guess) => {
    guessResult.length >= NUM_OF_GUESSES_ALLOWED
      ? window.alert("No more guesses!!!")
      : setGuessResult([...guessResult, guess]);
  };
  return (
    <>
      <Guess guessResult={guessResult} answer={answer} />
      <GuessResults guessResult={guessResult} />
      <GuessInput updateGuessResultHandle={updateGuessResult} />
    </>
  );
}

export default Game;
