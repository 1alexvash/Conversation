import React, { useState } from "react";
import data from "./data.json";

import authorImg from "../../images/author.png";
import linkImg from "../../images/link.png";
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
      top: positionY - 100,
      behavior: "smooth",
    });

    setHideQuestion(true);
    setTimeout(() => {
      setHideQuestion(false);
    }, 2000);
  };

  const WordsComponent = (
    <div className="words">
      {data.map((word, index) => (
        <p key={word} className={index === chosenWord ? "chosen" : ""}>
          {word}
        </p>
      ))}
    </div>
  );

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
      <header className="header">Englsih conversation</header>
      {WordsComponent}
      <footer className="footer">
        <p>
          Alexander Vashchuk <img src={authorImg} alt="author" title="author" />
        </p>
        <p>
          <a href="http://iteslj.org/questions/">
            Original source{" "}
            <img
              src={linkImg}
              alt="link"
              title="link to the original content"
            />
          </a>
        </p>
      </footer>
      {RandomWordComponent}
    </div>
  );
};

export default Discussional;
