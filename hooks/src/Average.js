import React, {
  useState,
  useMemo,
  useEffect,
  useCallback,
  useRef,
} from "react";

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
  // const [avg, setAvg] = useState(0);
  const my_id = useRef(0);
  const setId = (n) => {
    my_id.current = n;
  };

  const printId = () => {
    setId(my_id.current + 1);
    console.log(my_id.current);
  };
  // useRef 사용법 1 -> 레퍼객체를 null값으로 생성하고, tag에서 ref={input}로 설정
  const inputEl = useRef(null);

  //useRef 사용법 2 -> 로컬변수(랜더링과 상관없이 변할 수 있는 변수)를 관리할때 사용

  //
  // const onChange = (e) => {
  //   setNum(e.target.value);
  // };
  // 리 랜더링할때마다 해당함수를 새로 생성하는 동작을 한다.
  // 리소스 낭비를 막기위해 useCallback함수를 이용하여 첫 랜더링시에만 함수를 생성하도록 하자.
  const onChange = useCallback((e) => {
    setNum(e.target.value);
  }, []);
  // printId(); // 여기에 로컬함수가 실행된다면 뭔가 꼬인다 여기에서 실행시키지 말자.

  const onInsert = (e) => {
    if (num === "") return;
    const newNum = parseInt(num);

    if (isNaN(newNum)) {
      alert("숫자가 아닙니다.");
      setNum("");
      return;
    }

    const NextNumList = [...numList, newNum];
    setNumList(NextNumList);
    setNum("");
    inputEl.current.focus();
    printId();
  };
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onInsert();
    }
  };

  // 책에서는 이렇게 관리하지 않고, 바로 ul태그 안에 map을 써서 li 객체를 만들었다
  //
  // const [numListElements, setNumListElements] = useState([]);
  // useEffect(() => {
  //   setNumListElements(numList.map((num, idx) => <li key={idx}>{num}</li>));
  // }, [numList]);

  const avg = useMemo(() => getAverage(numList), [numList]); // 반면 이렇게 useMemo를 사용하면 해당 리스트의 변화가 있을때만 계산이 작동하도록 한다.
  //   const avg = getAverage(numList); // 이렇게 작성하면 input에서 매번 onChange가 발생할 때마다 계산을 한다.
  // 혹은 useEffect를 이용하면 가능할것같기도? 가능 뭐가 더 좋은거지?
  // useEffect(() => {
  //   console.log("이때만");
  //   setAvg(getAverage(numList));
  // }, [numList]);
  return (
    <div>
      <input
        value={num}
        onChange={onChange}
        onKeyPress={onKeyPress}
        ref={inputEl}
      ></input>
      <button onClick={onInsert}>삽입</button>
      <div>리스트 평균: {avg}</div>
      {/* <ul>{numListElements}</ul> */}
      <ul>
        {numList.map((num, idx) => (
          <li key={idx}>{num}</li>
        ))}
      </ul>
    </div>
  );
};

export default Average;
