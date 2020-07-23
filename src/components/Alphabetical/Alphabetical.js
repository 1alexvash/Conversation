import React, { useState } from "react";
import data from "./data.json";

import randomWordImg from "../../images/random.png";

const FirstList = () => {
  const [animate, setAnimate] = useState([0, 0]);

  const showList = data.map((letter, listIndex) => (
    <div
      key={letter}
      className={`list ${animate[0] === listIndex ? "animate-list" : ""}`}
    >
      {letter.map((word, itemIndex) => (
        <p
          className={`list-item ${
            animate[0] === listIndex && animate[1] === itemIndex
              ? "animate-item"
              : ""
          }`}
          key={word}
        >
          {word}
        </p>
      ))}
    </div>
  ));

  const generateRandomWord = () => {
    const randomLetter = Math.floor(Math.random() * data.length);
    const randomWord =
      Math.floor(Math.random() * (data[randomLetter].length - 1)) + 1;

    // Scroll
    const list = document.querySelectorAll(".Alphabetical div")[randomLetter];
    const positionY = list.offsetTop;

    window.scroll({
      top: positionY,
      left: 0,
      behavior: "smooth",
    });

    // Animate
    setAnimate([randomLetter, randomWord]);
  };

  const randomWord = (
    <img
      src={randomWordImg}
      className="random-word"
      onClick={() => generateRandomWord()}
      title="Generate random word"
    />
  );

  return (
    <div className="Alphabetical">
      {showList}
      {randomWord}
    </div>
  );
};

export default FirstList;
