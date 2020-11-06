import React from "react";
import Counter from "./Counter";

const MyComponent = ({ num }) => {
  return (
    <>
      <div>나의 새로운 컴포넌트!</div>
      {/* 이렇게 app -> MyComponent->Counter로 num을 props로 넘겨줬을 경우, counter에서 setstate를 하면 counter component에서만 반영되고 mycomponent에서는 반영이 안된다
      이를 해결하기 위해 상태관리 라이브러리를 쓰는가 보다. */}
      <div> MyComponent 의 num : {num} </div>
      <Counter num={num}></Counter>
    </>
  );
};

export default MyComponent;
