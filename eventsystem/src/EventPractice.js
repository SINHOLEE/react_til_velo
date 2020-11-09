import React, { Component } from "react";

class EventPractice extends Component {
  state = {
    message: "",
    username: "",
  };
  handleChange = (e) => {
    console.log(e.target.name);
    console.log(this.state[e.target.name]);
    this.setState({ [e.target.name]: e.target.value });
  };
  handleClick = () => {
    alert(this.state.message + "   " + this.state.username);
    this.setState({ message: "", username: "" });
  };

  handleKeyPress = (e) => {
    console.log(e);
    if (e.key === "Enter") {
      this.handleClick();
    }
  };
  render() {
    return (
      <div>
        <h1>이벤트 연십</h1>
        <input
          type="text"
          name="message"
          placeholder="enter anything"
          value={this.state.message}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="username"
          placeholder="이름을 적으세요"
          value={this.state.username}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
        <button onClick={this.handleClick}>확인</button>
      </div>
    );
  }
}

export default EventPractice;
