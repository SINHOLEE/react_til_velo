import React, { Component } from "react";

class EventPractice extends Component {
  state = {
    text: "",
  };

  render() {
    const { text } = this.state;
    const ChangeHandler = (e) => {
      this.setState({ text: e.target.value });
    };

    const clickHandler = (e) => {
      alert(text);
      this.setState({ text: "" });
    };
    return (
      <div>
        <h1>연습!</h1>
        {/* <h2>{text}</h2> */}
        <input
          type="text"
          name="message"
          placeholder="입력해주세여!"
          // value={text}
          onChange={ChangeHandler}
        ></input>
        <button onClick={clickHandler}>클릭하면 지워짐!</button>
      </div>
    );
  }
}

export default EventPractice;
