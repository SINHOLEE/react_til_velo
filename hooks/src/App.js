import { useState } from "react";
import Average from "./Average";
import InfoForUseEffect from "./InfoForUseEffect";
import InfoForCustomHooks from "./InfoForCustomHooks";
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
      {visuable ? <InfoForUseEffect></InfoForUseEffect> : null}
      <Average></Average>
      <InfoForCustomHooks></InfoForCustomHooks>
    </div>
  );
}

export default App;
