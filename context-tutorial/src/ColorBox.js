import React, {useContext} from "react";
import ColorContext from "./contexts/ColorContext";
import SizeContext from "./contexts/SizeContext";

const ColorBox = () => {
  const {state} = useContext(ColorContext);
  const {width, height} = useContext(SizeContext);
  const {color, subColor} = state;

  return (
    <>
      <div style={{width, height, background: color}}></div>
      <div style={{width: "100px", height: "100px", background: subColor}}></div>
    </>
  );
};

export default ColorBox;
