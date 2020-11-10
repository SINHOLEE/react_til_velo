import React, { useEffect, useReducer } from "react";

const onChangeReducer = (state, action) => {
  // 리듀서의 액션은 어떤 타입의 데이터도 받을 수 있으므로
  // e.target을 받아 쓸 수 있다.
  return {
    ...state,
    [action.name]: action.value,
  };
};

const Info = () => {
  //   const [name, setName] = useState("");
  //   const [nickName, setNickName] = useState("");
  const [state, dispatch] = useReducer(onChangeReducer, {
    name: "",
    nickName: "",
  });
  const { name, nickName } = state;

  useEffect(() => {
    //   componentDidMount, componentDidUpdate를 합쳐놓은 훅
    // console.log("rerendering");
    console.log("effect");
    console.log({ name, nickName });
    return () => {
      // update나 unmount 되기 전 미리 수행하려는 로직이 있을때 리턴에 익명함수를 이용하여
      // 재귀적인 로직으로 수행시킨다
      console.log("cleanUp");
      console.log({ name, nickName });
    };
  }, []); // 언마운트될때만 뒷정리 함수를 호출하고 싶다면, 빈배열을 두번째 파라미터 자리에 넣으면 된다.
  // 마운트될때만 실행하고 싶다면,
  //   useEffect(() => {
  //     console.log("only excute on mount");
  //   }, []);

  //특정값이 업데이트 될때만 실행하고 싶다면
  useEffect(() => {
    console.log("only excute on changing nickName");
  }, [nickName]);

  const onChange = (e) => {
    // console.log(e.target);
    dispatch(e.target);
  };

  return (
    <>
      <div>
        <input name="name" value={name} onChange={onChange}></input>
        <input name="nickName" value={nickName} onChange={onChange}></input>
      </div>
      <div>
        <div>
          <b>이름:</b>
          {name}
        </div>
        <div>
          <b>닉네임:</b>
          {nickName}
        </div>
      </div>
    </>
  );
};

export default Info;
