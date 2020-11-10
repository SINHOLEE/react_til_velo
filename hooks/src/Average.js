import React, { useState } from "react";

const getAverage = (numbers) => {
  console.log("calculating...");

  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((prev, curr) => {
    return prev + curr;
  }, 0);
  return sum / numbers.length;
};

// 이렇게 하면 인풋값이 바뀔때마다 getAverage()함수를 호출한다 !!

const Average = () => {
  const [numList, setNumList] = useState([]);
  const [num, setNum] = useState(""); // 타입이 안맞는다면?1

  const onChange = (e) => {
    setNum(e.target.value);
  };

  const onInsert = (e) => {
    if (num === "") return;
    const newNum = parseInt(num);
    console.log(newNum);

    if (isNaN(newNum)) {
      alert("숫자가 아닙니다.");
      setNum("");
      return;
    }

    const NextNumList = [...numList, newNum];
    setNumList(NextNumList);
    setNum("");
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onInsert();
    }
  };

  const numListElements = numList.map((num, idx) => <li key={idx}>{num}</li>);
  return (
    <div>
      <input value={num} onChange={onChange} onKeyPress={onKeyPress}></input>
      <div>리스트 평균: {getAverage(numList)}</div>
      <ul>{numListElements}</ul>
    </div>
  );
};

export default Average;
