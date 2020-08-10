import React from "react";
import "./scss/main.css";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Menu from "./components/Menu/Menu";
import Alphabetical from "./components/Alphabetical/Alphabetical";
import Discussional from "./components/Discussional/Discussional";
import WordGenerator from "./components/WordGenerator/WordGenerator";
import QuestionGenerator from "./components/QuestionGenerator/QuestionGenerator";

const App = () => {
  return (
    <Router>
      <Menu />
      <Route path="/alphabetical" component={Alphabetical}></Route>
      <Route path="/discussional" component={Discussional}></Route>
      <Route path="/word-generator" component={WordGenerator}></Route>
      <Route path="/question-generator" component={QuestionGenerator}></Route>
    </Router>
  );
};

export default App;
