import { useState } from "react";
import "./App.css";

function App() {
  const [number, setNumber] = useState(0);
  const increase = () => {
    setNumber(number + 1);
    document.getElementById("head").innerText = number;
    document.getElementById("head").style = "color:#4dff4d;";
  };
  const res = () => {
    setNumber(0);
    document.getElementById("head").innerText = number;
    document.getElementById("head").style = "color:#000;";
  };
  const dec = () => {
    setNumber(number - 1);
    document.getElementById("head").innerText = number;
    document.getElementById("head").style = "color:#ff1a1a;";
  };
  return (
    <>
      <div className="main">
        <div className="counter">
          <h1 className="heading" id="head">
            0
          </h1>
        </div>
        <div className="buttons">
          <button className="increase" onClick={increase}>
            Increase
          </button>
          <button className="reset" onClick={res}>
            Reset
          </button>
          <button className="decrease" onClick={dec}>
            Decrease
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
