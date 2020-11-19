import React from "react";
import ColorBox from "./ColorBox";
import SizeContext from "./contexts/SizeContext";

const SizeBox = () => {
  return <SizeContext.Consumer>{(value) => <ColorBox sizeValue={value}></ColorBox>}</SizeContext.Consumer>;
};

export default SizeBox;
