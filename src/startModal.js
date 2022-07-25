import React from "react";

const StartModal = ({
  gameActive,
  isGameActive,
  randomCharacter,
  setCount,
}) => {
  const startGame = () => {
    setCount(0);
    isGameActive(true);
    randomCharacter();
  };

  return (
    <>
      <div className="modal-overlay">
        <div className={`${gameActive ? "start-modal" : "start-modal show"}`}>
          <div className="brand">PICK YOUR WAIFU</div>
          <div className="rules">
            Rules: Two anime girls will be shown to you. You can go on a date
            with one of them. However, only one of them is above the age of 18.
            Pick the major girl for 5 consecutive rounds to win the game.
          </div>
          <button className="startBtn" onClick={startGame}>
            START
          </button>
        </div>
      </div>
    </>
  );
};

export default StartModal;
