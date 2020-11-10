import React, { Component } from "react";
import Item from "./Item";
class LifeCycleSample extends Component {
  state = {
    number: 0,
    color: null,
    randomNumbers: [],
  };

  myRef = null;

  constructor(props) {
    super(props);
    console.log("constuctor:");
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("getDerivedStateFromProps");
    console.log("nextProps:  ", nextProps);
    console.log("prevState:  ", prevState);
    if (nextProps.color !== prevState.color) {
      console.log("color changed");
      console.log("color: ", nextProps.color);
      console.log("getDerivedStateFromProps");
      return { color: nextProps.color };
    }
    console.log("getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("componentDidMount");
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate", nextProps, nextState);
    console.log(
      "shouldComponentUpdate  ",
      "state.number의 1자리 숫자가 4일때 return false",
      "return =====",
      nextState.number % 10 !== 4
    );
    return nextState.number % 10 !== 4;
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  handleClick = (e) => {
    this.setState((prevState) => {
      return { number: prevState.number + 1 };
    });

    this.setState((prevState) => {
      const nextRandomNumbers = [
        ...prevState.randomNumbers,
        { id: prevState.number, random: "asd" + prevState.number.toString() },
      ];
      return {
        randomNumbers: nextRandomNumbers,
      };
    });
  };

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate");
    if (prevProps.color !== this.props.color) {
      console.log(
        "getSnapshotBeforeUpdate 일때 컬러 다름, 리턴 myRef.style.color"
      );

      return this.myRef.style.color;
    }
    console.log("getSnapshotBeforeUpdate 일때 컬러 같음 리턴 null");
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate: ", prevProps, prevState);
    console.log("현재 컬러 상태: ", this.state.color);
    if (snapshot) {
      console.log("업데이트 되기 직전 색상", snapshot);
    }
    console.log("");
    console.log("");
  }
  onRemove = (id) => {
    const nextRandomNumbers = this.state.randomNumbers.filter(
      (n) => id !== n.id
    );
    this.setState({ randomNumbers: nextRandomNumbers });
  };

  render() {
    console.log("render");
    const style = { color: this.props.color };
    const itemList = this.state.randomNumbers.map((num) => (
      <Item
        key={num.id}
        number={num.random}
        propsOnClick={() => {
          this.onRemove(num.id);
        }}
      ></Item>
    ));
    return (
      <div>
        {/* {this.state.missing.value} */}
        <h1 style={style} ref={(ref) => (this.myRef = ref)}>
          {this.state.number}
        </h1>
        <p>color: {this.state.color}</p>
        <button onClick={this.handleClick}>더하기</button>
        {itemList}
      </div>
    );
  }
}

export default LifeCycleSample;
