import React from "react";
import {ColorConsumer} from "./contexts/ColorContext";
import "./SelectColors.css";

const colors = ["red", "blue", "black", "yellow", "pink", "green", "indigo", "violet"];

const SelectColors = () => {
  return (
    <ColorConsumer>
      {({action}) => (
        <div>
          <h2>색상을 선택하세요!</h2>
          <div className="color-list" style={{display: "flex", cursor: "pointer", hover: {background: "white"}}}>
            {colors.map((color) => (
              <div
                style={{width: "40px", height: "40px", background: color}}
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
      )}
    </ColorConsumer>
  );
};

export default SelectColors;
