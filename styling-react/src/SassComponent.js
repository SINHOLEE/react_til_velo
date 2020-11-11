import React, { useEffect, useState } from "react";
import "./SassComponent.scss";

const SassComponent = () => {
  const onClick = (e) => {
    console.log(e);
  };
  useEffect(() => {
    let cnt = 0;
    setInterval(() => {
      cnt += 1;
      console.log(cnt);
    }, 2000);
    // setInterval(() => {
    //   console.log(cnt);
    // }, 2000);
  }, []);
  console.log("rendered");
  return (
    <div className="SassComponent" onClick={onClick}>
      <div className="box red"></div>
      <div className="box orange"></div>
      <div className="box yellow"></div>
      <div className="box green"></div>
      <div className="box blue"></div>
    </div>
  );
};

export default SassComponent;
