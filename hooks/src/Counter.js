import { useReducer } from "react";
import React from "react";

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + 1 };
    case "DECREMENT":
      return { value: state.value - 1 };
    default:
      console.log("not");
      return state;
  }
}

const Counter = () => {
  // reducer쓰는 이유 : 컴포넌트 업데이트 로직을 밖으로 뺄 수 있기 때문
  const [state, dispatch] = useReducer(reducer, { value: 0 });
  return (
    <div>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch({ type: "DECREMENT" });
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          dispatch({ type: "NOTTHING" });
        }}
      >
        notthing
      </button>
      <p>{state.value}</p>
    </div>
  );
};

export default Counter;
