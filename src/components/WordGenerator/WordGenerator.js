import React, { useState } from "react";

import data from "./data.json";

const WordGenerator = () => {
  const [randomWord, setRandomWord] = useState("XXX");

  const generateWord = () => {
    const random = Math.floor(Math.random() * data.length);
    const randomWord = data[random];
    setRandomWord(randomWord);
  };

  return (
    <div className="Word-Generator">
      random word: {randomWord}
      <button onClick={generateWord}>Generate a word</button>
    </div>
  );
};

export default WordGenerator;
