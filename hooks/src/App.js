import { useState } from "react";
import Average from "./Average";
import Info from "./Info";
import Counter from "./Counter";
import "./App.css";

function App() {
  const [appValue, setAppValue] = useState(0);
  const [visuable, setVisuable] = useState(true);
  const onClick = (e) => {
    setVisuable(!visuable);
  };
  return (
    <div>
      <Counter></Counter>
      <button onClick={onClick}>{visuable ? "숨기기" : "보이기"}</button>
      {visuable ? <Info></Info> : null}
      <Average></Average>
    </div>
  );
}

export default App;
