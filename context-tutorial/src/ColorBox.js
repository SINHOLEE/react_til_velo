import React from "react";
import ColorContext, {ColorConsumer} from "./contexts/ColorContext";

const ColorBox = () => {
  return (
    <ColorConsumer>
      {({state}) => {
        const {color, subColor} = state;
        return (
          <>
            <div style={{width: "100px", height: "100px", background: color}}></div>
            <div style={{width: "100px", height: "100px", background: subColor}}></div>
          </>
        );
      }}
    </ColorConsumer>
  );
};

export default ColorBox;
