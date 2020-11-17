import React, { useCallback, useState } from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState('');
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (value !== '') {
        onInsert(value);
      }
      setValue('');
    },
    [value, onInsert], // 여기서 왜 onInsert까지 들어나는가?
    // 만약에 deps 배열 안에 함수에서 사용하는 값을 넣지 않게 된다면, 함수 내에서 해당 값들을 참조할때 가장 최신 값을 참조 할 것이라고 보장 할 수 없습니다.
    // props 로 받아온 함수가 있다면, 이 또한 deps 에 넣어주어야 해요.
    // 출처: https://react.vlpt.us/basic/18-useCallback.html
  );
  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        placeholder="할 일을 입력하세요"
        onChange={onChange}
        value={value}
      ></input>
      <button type="submit">
        <MdAdd></MdAdd>
      </button>
    </form>
  );
};

export default TodoInsert;
