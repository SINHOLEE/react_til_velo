import React, { useState } from "react";
import EventPractice from "./eventscomponent/EventPractice";
import "./App.css";

const FunctionalComponent = () => {
  const [message, setMessage] = useState("");
  const onClickEnter = () => setMessage("안녕하세요!");
  const onClickLeave = () => setMessage("안녕히 가세요!");
  const ob = { a: 1, b: 2, c: 3 };
  console.log("ob: ", ob);
  const copied_ob = { ...ob, b: 66, g: 8 };
  console.log("copied_ob: ", copied_ob);

  console.log(JSON.stringify(ob) === JSON.stringify(copied_ob));

  console.log("==============================");

  const arr = [1, 2, 3];
  const copied_arr = [2, ...arr, 3, 4];
  console.log(arr);
  console.log(copied_arr);
  console.log(arr === copied_ob);
  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <div>{message}</div>
      <div className="div-box">
        <EventPractice></EventPractice>
      </div>
    </div>
  );
};

export default FunctionalComponent;
