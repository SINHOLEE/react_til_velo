import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cnt: 0,
      num: this.props.num,
    };
  }

  render() {
    const { cnt, num } = this.state;
    return (
      <>
        <div>{cnt}</div>
        <div>Counter에서의 num {num}</div>
        <button
          onClick={() => {
            this.setState({ num: num + 1 });
          }}
        >
          +1
        </button>
      </>
    );
  }
}

export default Counter;
