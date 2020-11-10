import React, { useState } from "react";

const Say = () => {
  const [message, setMessage] = useState("");
  const onClickEnter = (e) => {
    console.log(e.type);
    console.log("22");
    setMessage("어서오세요");
  };
  const onClickLeave = (e) => {
    console.log("11");
    setMessage("안녕히 가세요");
  };

  const [color, setColor] = useState("black");

  return (
    <div>
      <h1>{message}</h1>
      <button
        onClick={(e) => {
          onClickEnter(e);
        }}
        onChange={(e) => {
          onClickLeave(e);
        }}
      >
        입장
      </button>
      <button onClick={onClickLeave}>퇴장</button>
    </div>
  );
};

export default Say;
