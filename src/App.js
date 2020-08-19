import React from "react";
import "./scss/main.css";

import { HashRouter as Router, Route } from "react-router-dom";

import Menu from "./components/Menu/Menu";
import Alphabetical from "./components/Alphabetical/Alphabetical";
import Discussional from "./components/Discussional/Discussional";
import WordGenerator from "./components/WordGenerator/WordGenerator";
import QuestionGenerator from "./components/QuestionGenerator/QuestionGenerator";

const App = () => {
  return (
    <Router>
      <Menu />
      <Route exact path="/">
        <div className="App-Description">
          <h1>How To Use</h1>
          <p>
            This website was designed to improve your conversational skills.
            Just choose a page and practice English with your friend or tutor.
          </p>
          <p>
            On this website you will find 4 individual pages in the menu section
            with different functionality for practicing conversation.
          </p>
          <p>Description of every page:</p>
          <h2>Alphabetical</h2>
          <p>
            Huge list of words. Just choose any word like "Sun" and give it to
            your partner and ask him to ask you a question in return with that
            word like "Do you like being on the sun". After your answer switch
            it off and ask him to to choose.
          </p>
          <h2>Discussional</h2>
          <p>Shorter list of words but with more spicy topics</p>
          <h2>Word Generator</h2>
          <p>Plain and simple button with generator of random words</p>
          <h2>Question generator</h2>
          <p>Same thing but for questions</p>
        </div>
      </Route>
      <Route path="/alphabetical" component={Alphabetical}></Route>
      <Route path="/discussional" component={Discussional}></Route>
      <Route path="/word-generator" component={WordGenerator}></Route>
      <Route path="/question-generator" component={QuestionGenerator}></Route>
    </Router>
  );
};

export default App;
