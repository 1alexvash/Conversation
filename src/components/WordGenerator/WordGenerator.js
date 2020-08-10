import React, { useState } from "react";
import Spinner from "../Spinner/Spinner";

import data from "./data.json";

const WordGenerator = () => {
  const [randomWord, setRandomWord] = useState("");
  const [animationProgress, setAnimationProgress] = useState(false);

  const generateWord = () => {
    const random = Math.floor(Math.random() * data.length);
    const randomWord = data[random];
    setRandomWord(randomWord);

    // Animation
    setAnimationProgress(true);
    const randomTime = 500 + Math.round(Math.random() * 6) * 250;
    setTimeout(() => {
      setAnimationProgress(false);
    }, randomTime);
  };

  if (animationProgress) {
    return (
      <div className="fix-content-to-center">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="Word-Generator fix-content-to-center">
      <div className="random-word">{randomWord}</div>
      <button
        className="get-word"
        style={{ marginTop: randomWord ? "20px" : "" }}
        onClick={generateWord}
      >
        {!randomWord ? "Generate a word" : "Generate a new word"}
      </button>
    </div>
  );
};

export default WordGenerator;
