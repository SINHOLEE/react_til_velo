import React, {useCallback, useRef, useState} from "react";
// 사실은 immutable하지만, 우리가 사용하는 함수는 mutable한 걸 이용하여 데이터 조작 but 불변성 보장
// produce가 반환하는 값은 불변성이 보장된 변환된 데이터
import produce from "immer";
import "./App.css";

const App = () => {
  const nextId = useRef(1);
  const [form, setForm] = useState({name: "", username: ""});
  const [data, setData] = useState({
    arr: [],
    uselessValue: null,
  });

  const onChange = useCallback(
    (e) => {
      const {name, value} = e.target;
      // setForm({
      //   ...form,
      //   [name]: [value],
      // });

      // immer를 이용한 mutable스럽게 데이터 조작하기
      setForm(
        produce(form, (draft) => {
          draft[name] = value;
        })
      );
    },
    [form]
  );

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const newUser = {
        id: nextId.current,
        username: form.username,
        name: form.name,
      };
      // setData({...data, arr: data.arr.concat(newUser)});
      setData(
        produce(data, (draft) => {
          draft.arr.push(newUser);
        })
      );
      setForm({name: "", username: ""});
      nextId.current += 1;
      nameInputEl.current.focus();
    },
    // [form, data]
    [form.name, form.username, data]
  );

  const onRemove = useCallback((id) => {
    const newDataArr = data.arr.filter((user) => user.id !== id);
    // setData({...data, arr: newDataArr});
    setData((data) =>
      produce(data, (draft) => {
        draft.arr.splice(
          draft.arr.findIndex((user) => user.id === id),
          1
        );
      })
    );
  }, []);
  const nameInputEl = useRef(null);
  console.log("re");
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input name="name" value={form.name} ref={nameInputEl} onChange={onChange} placeholder="이름"></input>
        <input name="username" value={form.username} onChange={onChange} placeholder="아이디"></input>
        <button type="submit">등록</button>
      </form>
      <ul>
        {data.arr.map((user) => (
          <li
            key={user.id}
            onClick={() => {
              onRemove(user.id);
            }}
          >
            {user.name}({user.username})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
