import LifeCycleSample from "./LifeCycleSample";
import ErrorBoundary from "./ErrorBoundary";
import "./App.css";

import React, { Component } from "react";

const getRandomColor = () => {
  console.log("");
  console.log("randomcolor gen!!");
  console.log("");
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
};

class App extends Component {
  state = { color: "#000000" };

  handleClick = (e) => {
    this.setState({ color: getRandomColor() });
  };
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>랜덤색상</button>
        <ErrorBoundary>
          <LifeCycleSample color={this.state.color}></LifeCycleSample>
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
