import React, { useState } from "react";
import ColorChoose from "./ColorChoose";
import ColorSquare from "./ColorSquare";
import "./App.css";

const App = () => {
  const [backgroundColor, setColor] = useState("");
  const colorHandler = (event) => {
    setColor(event.target.value);
  };
  return (
    <div className="card">
      <div>
        <ColorChoose
          text={"Select Your Color"}
          value={backgroundColor}
          onChange={colorHandler}
        />
      </div>
      <div className="color-box">
        <ColorSquare backgroundColor={backgroundColor} />
      </div>
    </div>
  );
};

export default App;
