import React, { Component } from "react";
import FunctionalComponent from "./FunctionalComponent";
import "./App.css";

class Counter extends Component {
  //   state사용하는 첫번째 방법
  //     constructor(props) {
  //     super(props);
  //     this.state = {
  //       cnt: 0,
  //       num: this.props.num,
  //     };
  //   }
  // state를 사용하는 두번째 방법
  state = {
    cnt: 0,
    num: this.props.num,
  };
  render() {
    const { cnt, num } = this.state;
    const { props_num } = this.props.num;

    const onClickHandler = (e) => {
      console.log(e);
      console.log(props_num);
      //   this.setState({ num: num + 1 });
      //   this.setState((ps) => {
      //     return { num: ps.num + 1 };
      //   });
      //   this.setState({ cnt: cnt + 1 });
      //   this.setState({ num: num + 1 });
      this.setState(
        (ps) => ({ cnt: ps.cnt + 1 }),
        () => {
          console.log("변하기 전cnt: ", cnt);
          console.log("변한 후 cnt: ", this.state.cnt);
        }
      );
      //   this.setState((ps) => ({
      //     num: ps.num + 1,
      //   }));
    };

    return (
      <>
        <div>{cnt}</div>
        <div>Counter에서의 num {num}</div>
        <button onClick={onClickHandler}>+1</button>
        <div className="div-box">
          <FunctionalComponent></FunctionalComponent>
        </div>
      </>
    );
  }
}

export default Counter;
