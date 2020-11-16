import React, { useState } from 'react';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: '허버버ㅓ', checked: false },
    { id: 2, text: '이럴수가', checked: true },
  ]);
  const [insertValue, setInsertValue] = useState('');
  const handleAddItem = (e) => {
    // form 제출 막기
    e.preventDefault();
    // 새로운 todos 객체 생성
    const newTodos = [
      ...todos,
      { id: todos[todos.length - 1].id + 1, text: insertValue, checked: false },
    ];
    // 새로운 todos 객체 set
    setTodos(newTodos);
    // insertValue reset
    setInsertValue('');
  };
  console.log('rendered');
  return (
    <TodoTemplate>
      <TodoInsert
        handleAddItem={handleAddItem}
        insertValue={insertValue}
        setInsertValue={setInsertValue}
      ></TodoInsert>
      <TodoList todos={todos}></TodoList>
    </TodoTemplate>
  );
}

export default App;
