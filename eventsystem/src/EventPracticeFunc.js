import React, { useState } from "react";
import ValidationSample from "./ValidationSample.js";

const EventPracticeFunc = () => {
  const [form, setForm] = useState({
    username: "",
    message: "",
  });
  const { username, message } = form;

  const onChange = (e) => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextForm);
  };

  const onClick = (e) => {
    alert(username + " " + message);
    setForm({ username: "", message: "" });
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };
  return (
    <div>
      <input
        placeholder="이름쓰시오"
        name="username"
        type="text"
        value={username}
        onChange={onChange}
      />
      <input
        placeholder="메시지를 쓰시오"
        name="message"
        type="text"
        value={message}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <button onClick={onClick}>클릭</button>
      <ValidationSample></ValidationSample>
    </div>
  );
};

export default EventPracticeFunc;
