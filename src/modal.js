import React, { useState, useRef } from "react";
import myvideo from "./fbi.mp4";
import EndModal from "./endmodal";

const Modal = ({ characterArray, randomCharacter, count, isGameActive }) => {
  let index = 2;
  let randomIndex;
  const [incorrect, isIncorrect] = useState(false);
  const [age, setAge] = useState(0);
  const [isVideoPaused, toggleVideo] = useState(false);
  const vidRef = useRef(null);

  while (0 !== index) {
    randomIndex = Math.floor(Math.random() * index);
    index--;
    [characterArray[index], characterArray[randomIndex]] = [
      characterArray[randomIndex],
      characterArray[index],
    ];
  }
  const leftSelected = () => {
    if (characterArray[0].age < 18) {
      vidRef.current.play();
      isIncorrect(true);
      setAge(characterArray[0].age);
    } else if (count <= 5) {
      randomCharacter();
    } else {
      console.log("modal clicked");
    }
  };

  const rightSelected = () => {
    if (characterArray[1].age < 18) {
      vidRef.current.play();
      isIncorrect(true);
      setAge(characterArray[1].age);
    } else if (count <= 5) {
      randomCharacter();
    } else {
      console.log("modal clicked");
    }
  };

  const destroyVideo = () => {
    vidRef.current.pause();
    console.log("clicked");
    isGameActive(false);
  };

  const pauseVideo = () => {
    if (isVideoPaused) {
      vidRef.current.play();
      toggleVideo(false);
    } else {
      vidRef.current.pause();
      toggleVideo(true);
    }
  };

  return (
    <>
      <div className={`${incorrect ? "title" : " title hide"}`}>
        <header>YOU PICKED THE WRONG WAIFU</header>
      </div>
      {count <= 5 ? (
        <div
          className={`${incorrect ? "modal-overlay color" : "modal-overlay"}`}
        >
          <div
            className={`${incorrect ? "left-modal hide" : "left-modal"}`}
            onClick={leftSelected}
          >
            <img src={characterArray[0].image} alt={characterArray[0].name} />
            <h1 className="name">{characterArray[0].name}</h1>
          </div>
          <div
            className={`${incorrect ? "right-modal hide" : "right-modal"}`}
            onClick={rightSelected}
          >
            <img src={characterArray[1].image} alt={characterArray[1].name} />
            <h1 className="name">{characterArray[1].name}</h1>
          </div>
          <div className="video-container">
            <button
              className={`${incorrect ? "close-btn show" : "close-btn"}`}
              onClick={destroyVideo}
            >
              X
            </button>
            <video
              className={`${incorrect ? "videoSize show" : "videoSize"}`}
              ref={vidRef}
              onClick={pauseVideo}
            >
              <source src={myvideo} type="video/mp4" />
            </video>
          </div>
          <div className={`${incorrect ? "age-reveal" : "age-reveal hide"}`}>
            HER AGE WAS {age}. FBI IS COMIN FOR YOU
          </div>
        </div>
      ) : (
        <EndModal isGameActive={isGameActive} />
      )}
    </>
  );
};

export default Modal;
