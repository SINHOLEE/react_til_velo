import React, { Component } from "react";

import Say from "./Say";
import EventPractice from "./EventPractice";
import EventPracticeFunc from "./EventPracticeFunc";
import ScrollBox from "./ScrollBox";
import "./App.css";

class App extends Component {
  render() {
    return (
      <>
        <EventPractice></EventPractice>
        <div></div>
        <EventPracticeFunc></EventPracticeFunc>
        <ScrollBox
          ref={(ref) => {
            this.scrollBox = ref;
          }}
        ></ScrollBox>
        <button
          onClick={() => {
            this.scrollBox.scrollToBotton();
          }}
        >
          맨밑으로
        </button>
      </>
    );
  }
}

export default App;
