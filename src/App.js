import React, { useState, useEffect } from "react";
import "./styles/index.scss";
//Components
import CreateGame from "./components/CreateGame";
import Game from "./components/Game";
const App = () => {
  const [gameMode, setGameMode] = useState(null);
  const [words, setWords] = useState([]);
  const [prevWords, setPrevWords] = useState([]);

  useEffect(() => {
    let previusWords = localStorage.getItem("words");
    if (previusWords) {
      previusWords = previusWords.split(",");
      setPrevWords(previusWords);
    }
    if (gameMode === null) {
      setWords([]);
    }
  }, [gameMode]);

  return (
    <div className="container">
      {!gameMode && (
        <ul>
          <li>
            <button className="def-btn" onClick={() => setGameMode("newGame")}>
              New Game
            </button>
          </li>
          <li>
            <button className="def-btn" onClick={() => setGameMode("loadGame")}>
              Load Game
            </button>
          </li>
        </ul>
      )}

      {(gameMode === "newGame" || gameMode === "loadGame") && (
        <CreateGame
          words={words}
          setWords={setWords}
          setGameMode={setGameMode}
          prevWords={prevWords}
          loadGame={gameMode === "loadGame" ? true : false}
        />
      )}

      {gameMode === "game" && <Game words={words} setGameMode={setGameMode} />}
    </div>
  );
};

export default App;
