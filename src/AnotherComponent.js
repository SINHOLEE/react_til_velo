import Item from "./Item";
import React from "react";
import PropTypes from "prop-types";

const AnotherComponent = ({ name, myNum, children }) => {
  console.log(typeof children);
  console.log(name);
  console.log(myNum);
  console.log(typeof myNum);

  const elements = myNum.map((element) => {
    return <Item num={element}></Item>;
  });
  return (
    <>
      <div>안녕하세요 제 이름은 {name} 입니다.</div>
      <div>{children}</div>
      {elements}
    </>
  );
};
AnotherComponent.defaultProps = {
  name: "wltngk",
};

AnotherComponent.propTypes = {
  name: PropTypes.string,
  myNum: PropTypes.array.isRequired,
};
export default AnotherComponent;
