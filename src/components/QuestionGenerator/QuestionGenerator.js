import React, { useState } from "react";
import Spinner from "../Spinner/Spinner";

import data from "./data.json";

const QuestionGenerator = () => {
  const [randomWord, setRandomWord] = useState("");
  const [animationProgress, setAnimationProgress] = useState(false);

  const generateWord = () => {
    const random = Math.floor(Math.random() * data.length);
    const randomWord = data[random];
    setRandomWord(randomWord);

    // Animation
    setAnimationProgress(true);
    const randomTime = 1500 + Math.round(Math.random() * 6) * 250;
    setTimeout(() => {
      setAnimationProgress(false);
    }, randomTime);
  };

  if (animationProgress) {
    return (
      <div className="fix-content-to-center">
        <Spinner bg={"purple"} />
      </div>
    );
  }

  return (
    <div className="Question-Generator fix-content-to-center">
      <div className="random-question">{randomWord}</div>
      <button
        className="get-word"
        style={{ marginTop: randomWord ? "20px" : "" }}
        onClick={generateWord}
      >
        {!randomWord ? "Generate a question" : "Generate a new question"}
      </button>
    </div>
  );
};

export default QuestionGenerator;
