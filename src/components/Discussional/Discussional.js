import React, { useState } from "react";
import data from "./data.json";

import randomWordImg from "../../images/random2.png";

const Discussional = () => {
  const [chosenWord, setChosenWord] = useState();
  const [hideQuestion, setHideQuestion] = useState(false);

  const generateRandomWord = () => {
    const random = Math.floor(Math.random() * data.length);
    setChosenWord(random);

    // Scroll
    const word = document.querySelectorAll(".Discussional p")[random];
    const positionY = word.offsetTop;

    window.scroll({
      top: positionY,
      behavior: "smooth",
    });

    setHideQuestion(true);
    setTimeout(() => {
      setHideQuestion(false);
    }, 2000);
  };

  const RandomWordComponent = (
    <img
      src={randomWordImg}
      className={`random-word ${hideQuestion ? "hide" : ""}`}
      onClick={generateRandomWord}
      title="Get a random word"
      alt=""
    />
  );

  return (
    <div className="Discussional">
      {data.map((q, index) => (
        <p key={q} className={index === chosenWord ? "chosen" : ""}>
          {q}
        </p>
      ))}
      {RandomWordComponent}
    </div>
  );
};

export default Discussional;
