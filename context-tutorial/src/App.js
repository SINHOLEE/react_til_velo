import "./App.css";
import ColorBox from "./ColorBox";
import {ColorProvider} from "./contexts/ColorContext";
import SelectColors from "./SelectColors";

function App() {
  return (
    <>
      <ColorProvider>
        <SelectColors></SelectColors>
        <ColorBox></ColorBox>
      </ColorProvider>
    </>
  );
}

export default App;
