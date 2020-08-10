import React, { useState } from "react";
import data from "./data.json";

import randomWordImg from "../../images/random.png";
import conversationImg from "../../images/conversation.png";

const FirstList = () => {
  const [animate, setAnimate] = useState([null, null]);

  const ListComponent = (
    <div className="lists">
      {data.map((letter, listIndex) => (
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
      ))}
    </div>
  );

  const generateRandomWord = () => {
    const randomLetter = Math.floor(Math.random() * data.length);
    const randomWord =
      Math.floor(Math.random() * (data[randomLetter].length - 1)) + 1;

    // Scroll
    const list = document.querySelectorAll(".Alphabetical div")[randomLetter];
    const positionY = list.offsetTop;

    window.scroll({
      top: positionY,
      behavior: "smooth",
    });

    // Animate
    setAnimate([randomLetter, randomWord]);
  };

  const RandomWordComponent = (
    <img
      src={randomWordImg}
      className="random-word"
      onClick={generateRandomWord}
      title="Get a random word"
      alt=""
    />
  );

  return (
    <div className="Alphabetical">
      <header className="header">
        Conversation
        <img className="logo" src={conversationImg} alt="conversation" />
      </header>
      {ListComponent}
      <footer className="footer">
        <p>
          Author: <span className="small">Alexander Vashchuk</span>
        </p>
        <p>
          Original source:{" "}
          <a
            className="small"
            target="blank"
            href="https://esldiscussions.com/"
          >
            https://esldiscussions.com/
          </a>
        </p>
      </footer>
      {RandomWordComponent}
    </div>
  );
};

export default FirstList;
