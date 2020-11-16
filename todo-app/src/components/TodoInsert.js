import React, { useRef } from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = ({ handleAddItem, insertValue, setInsertValue }) => {
  const onChange = () => {
    setInsertValue(inputRef.current.value);
  };
  const inputRef = useRef(null);
  return (
    <form className="TodoInsert">
      <input
        placeholder="할 일을 입력하세요"
        ref={inputRef}
        onChange={onChange}
        value={insertValue}
      ></input>
      <button type="submit" onClick={handleAddItem}>
        <MdAdd></MdAdd>
      </button>
    </form>
  );
};

export default TodoInsert;
