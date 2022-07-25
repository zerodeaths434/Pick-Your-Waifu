import React, { useState } from "react";
import Modal from "./modal";
import StartModal from "./startModal";
import { legalCharacter, illegalCharacter } from "./characters";

let character1, character2;

const App = () => {
  const [gameActive, isGameActive] = useState(false);
  const [characterArray, setCharacterArray] = useState([]);
  const [count, setCount] = useState(0);

  const randomCharacter = () => {
    character1 =
      legalCharacter[Math.floor(Math.random() * legalCharacter.length)];
    character2 =
      illegalCharacter[Math.floor(Math.random() * illegalCharacter.length)];
    setCharacterArray([character1, character2]);
    setCount((count) => count + 1);
  };

  return (
    <>
      {gameActive ? (
        <Modal
          characterArray={characterArray}
          randomCharacter={randomCharacter}
          count={count}
          isGameActive={isGameActive}
        />
      ) : (
        <StartModal
          setCount={setCount}
          gameActive={gameActive}
          isGameActive={isGameActive}
          randomCharacter={randomCharacter}
        />
      )}
    </>
  );
};

export default App;
