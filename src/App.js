import React, { Fragment } from "react";
import MyComponent from "./MyComponent";
import AnotherComponent from "./AnotherComponent";
import "./App.css";

function App() {
  const reactName = "신호";

  return (
    <Fragment>
      <div>
        <div
          className="react" // 여기에 도 주석 사용 가능
        >
          {reactName}
        </div>
        {/* 오호 주석은 여기에! */}
        <div></div>
      </div>
      <MyComponent num={1}></MyComponent>
      <AnotherComponent name="지수" myNum={["arr", "zzz", "bbb"]}>
        <div>컴포넌트 사이 </div>
      </AnotherComponent>
    </Fragment>
  );
}

export default App;

// import React, { Component } from "react";
// import "./App.css";

// class App extends Component {
//   render() {
//     const name = "react";
//     return <div className="react">{name}</div>;
//   }
// }

// export default App;
