import React, { useState, useMemo, useEffect } from "react";

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
  const [avg, setAvg] = useState(0);
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

  //   const avg = useMemo(() => getAverage(numList), [numList]); // 반면 이렇게 useMemo를 사용하면 해당 리스트의 변화가 있을때만 계산이 작동하도록 한다.
  //   const avg = getAverage(numList); // 이렇게 작성하면 input에서 매번 onChange가 발생할 때마다 계산을 한다.
  // 혹은 useEffect를 이용하면 가능할것같기도? 가능 뭐가 더 좋은거지?
  useEffect(() => {
    console.log("이때만");
    setAvg(getAverage(numList));
  }, [numList]);
  const numListElements = numList.map((num, idx) => <li key={idx}>{num}</li>);
  return (
    <div>
      <input value={num} onChange={onChange} onKeyPress={onKeyPress}></input>
      <div>리스트 평균: {avg}</div>
      <ul>{numListElements}</ul>
    </div>
  );
};

export default Average;
