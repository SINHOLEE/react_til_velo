import React, {useEffect, useState, useRef} from "react";
import "./SassComponent.scss";

const SassComponent = () => {
  const colorList = ["red", "orange", "yellow", "green", "blue"];

  const [Elements, setElements] = useState(colorList.map((color, idx) => <div className={"box " + color} key={idx}></div>));
  return <div className="SassComponent">{Elements}</div>;
};

export default SassComponent;
