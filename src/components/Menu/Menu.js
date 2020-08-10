import React, { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [showModel, setShowModel] = useState(false);

  function toggleModel() {
    setShowModel(!showModel);
  }

  return (
    <div className="Menu">
      <div
        className={`hamburger ${showModel ? "active" : "not-active"}`}
        onClick={toggleModel}
      >
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>

      <div className={`overlay ${showModel ? "active" : "not-active"}`}>
        <div className="overlay-content">
          <Link onClick={() => setShowModel(false)} to={"/alphabetical"}>
            Alphabetical list
          </Link>
          <Link onClick={() => setShowModel(false)} to={"/discussional"}>
            Discussional list
          </Link>
          <Link onClick={() => setShowModel(false)} to={"/word-generator"}>
            Word generator
          </Link>
          <Link onClick={() => setShowModel(false)} to={"/question-generator"}>
            Question generator
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Menu;
