import React, { Component } from "react";
import "./ValidatoinSample.css";

class ValidationSample extends Component {
  state = {
    password: "",
    clicked: false,
    validated: false,
  };

  handleChange = (e) => {
    this.setState({ password: e.target.value });
  };

  handleButtonClick = (e) => {
    console.log(e);
    console.log(this.state);
    this.setState({
      clicked: true,
      validated: this.state.password === "!wishket",
    });
    this.input.focus();
  };

  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      this.handleButtonClick();
    }
  };

  render() {
    return (
      <div>
        <input
          ref={(ref) => {
            this.input = ref;
          }}
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
          className={
            this.state.clicked
              ? this.state.validated
                ? "sucess"
                : "failure"
              : ""
          }
        />
        <button onClick={this.handleButtonClick}>r검증하기</button>
      </div>
    );
  }
}

export default ValidationSample;
