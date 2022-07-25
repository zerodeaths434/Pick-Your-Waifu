import React from "react";

const EndModal = ({ isGameActive }) => {
  return (
    <div className="modal-overlay">
      <div className="start-modal">
        <div className="endText">
          Congratulations, you are not a pedophile and have a good taste in
          waifus.
        </div>
        <button className="startBtn" onClick={() => isGameActive(false)}>
          Play Again
        </button>
      </div>
    </div>
  );
};

export default EndModal;
