import React, { useState, useEffect } from "react";
//assets
import ReturnIcon from "../assets/icons/ReturnIcon";
//componetns
import CountDown from "./CountDown";

const Game = ({ words, setGameMode }) => {
  const [counter, setCounter] = useState(5);
  const [currentWord, setCurrentWords] = useState(null);
  let wordsLength = words.length - 1;

  useEffect(() => {
    if (counter === 0) {
      startGame();
    }
  }, [counter]);

  const startGame = () => {
    console.log("games started");
    setCurrentWords(words[wordsLength]);

    setInterval(() => {
      if (wordsLength >= 0) {
        setCurrentWords(words[wordsLength - 1]);
        wordsLength--;
      }
      if (wordsLength < 0) {
        wordsLength = [...words];
        wordsLength = wordsLength.length - 1;
        setCurrentWords(words[wordsLength]);
      }
    }, 5000);
  };

  return (
    <div className="large-word">
      <CountDown counter={counter} setCounter={setCounter} />
      {counter === 0 && currentWord}

      <div className="return" onClick={() => setGameMode(null)}>
        <ReturnIcon />
      </div>
    </div>
  );
};

export default Game;
