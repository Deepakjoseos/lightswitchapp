import React from "react";
import "./App.css";
import BulbGlow from "./components/Light";

function App() {
  function switchChanged(switchBtn, switchPos) {
    switchBtn.innerText = switchPos;
  }
  return (
    <div className="AppWrapper">
      <BulbGlow switchClick={switchChanged} num="0" />
      <BulbGlow switchClick={switchChanged} num="1" />
    </div>
  );
}

export default App;
