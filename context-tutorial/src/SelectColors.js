import React, {useContext} from "react";
import ColorContext, {ColorConsumer} from "./contexts/ColorContext";
import "./SelectColors.css";

const colors = ["red", "blue", "black", "yellow", "pink", "green", "indigo", "violet"];

const SelectColors = () => {
  const {action} = useContext(ColorContext);
  return (
    <div>
      <h2>색상을 선택하세요!</h2>
      <div className="color-list" style={{display: "flex", cursor: "pointer", hover: {background: "white"}}}>
        {colors.map((color) => (
          <div
            style={{width: "40px", height: "40px", background: color}}
            key={color}
            onClick={() => {
              action.setColor(color);
            }}
            onContextMenu={(e) => {
              e.preventDefault();
              action.setSubColor(color);
            }}
          ></div>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default SelectColors;
