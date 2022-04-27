import React, { useState, useEffect } from "react";
//assets
import ReturnIcon from "../assets/icons/ReturnIcon";
const CreateGame = ({ words, setWords, setGameMode, prevWords, loadGame }) => {
  const [inputValue, setInputValue] = useState("");
  const [replaceIdx, setReplaceIdx] = useState(null);

  const changeWordHandler = (word, index) => {
    setInputValue(word);
    setReplaceIdx(index);
  };

  const onFormSubmit = (e) => {
    console.log("e");
    e.preventDefault();
    if (replaceIdx !== null) {
      let tempWords = [...words];
      if (inputValue === "") {
        tempWords.splice(replaceIdx, 1);
      } else {
        tempWords[replaceIdx] = inputValue;
      }
      setWords(tempWords);
      setReplaceIdx(null);
    } else {
      setWords((words) => [...words, inputValue]);
    }

    setInputValue("");
  };

  const starGameHandler = () => {
    localStorage.setItem("words", words);
    setGameMode("game");
  };

  useEffect(() => {
    if (loadGame) {
      setWords(prevWords);
    }
  }, []);
  return (
    <section className="create-game">
      <div className="word-container">
        {words.length > 0 &&
          words.map((word, index) => {
            return (
              <span
                className="word"
                onClick={() => changeWordHandler(word, index)}
              >
                {word}
              </span>
            );
          })}
      </div>

      <form onSubmit={onFormSubmit}>
        <input
          className="basic-input"
          placeholder="Type your first word"
          autoFocus={true}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value.toUpperCase())}
        />
      </form>

      <button className="button" onClick={starGameHandler}>
        Start Game
      </button>

      <div className="return" onClick={() => setGameMode(null)}>
        <ReturnIcon />
      </div>
    </section>
  );
};

export default CreateGame;
