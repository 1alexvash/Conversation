import React from "react";
import data from "./data.json";

import randomWordImg from "../../images/random2.png";

const Discussional = () => {
  const generateRandomWord = () => {};

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
    <div className="Discussional">
      {data.map((q) => (
        <p key={q}>{q}</p>
      ))}
      {RandomWordComponent}
    </div>
  );
};

export default Discussional;
