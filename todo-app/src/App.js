import React, { useCallback, useRef, useState } from 'react';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';

function createBulkTodos() {
  const arr = [];
  for (let id = 0; id < 9000; id++) {
    arr.push({
      id,
      text: `할 일${id}`,
      checked: false,
    });
  }
  return arr;
}

function App() {
  // 해당 state를 관리하는 component 의 메소드는 해당 component에서 생성하고 자식 컴포넌트에게 내려준다.
  // 만약 부모 혹은 조상 component에서 어떤 값이 내려오는 props가 현재 state와 충돌이 일어날 상황이 있다면? 어떻게해야하지

  const [todos, setTodos] = useState(createBulkTodos());
  const onToggle = useCallback(
    (id) => {
      const nextTodos = todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo,
      );
      // console.log(nextTodos);
      setTodos(nextTodos);
    },
    [todos],
  );
  const nextId = useRef(3);
  const onInsert = useCallback(
    (text) => {
      // 새로운 todos 객체 생성 궁금 concat vs []...todos, {}] 무슨차이? concat은 새로운 객체를 만드는거고,
      //...은 얕은 복사인건데 concat이 깊은복사를 한다고 생각하면 되나요?
      // const newTodos = [...todos, { id: nextId.current, text, checked: false }];
      const newTodos = todos.concat({
        id: nextId.current,
        text,
        checked: false,
      });
      // 새로운 todos 객체 set
      setTodos(newTodos);
      nextId.current += 1;
      // insertValue reset
    },
    [todos],
  );
  const onRemove = useCallback(
    (id) => {
      const nextTodos = todos.filter((todo) => todo.id !== id);
      setTodos(nextTodos);
    },
    [todos],
  );
  console.log('rendered');
  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert}></TodoInsert>
      <TodoList
        todos={todos}
        onRemove={onRemove}
        onToggle={onToggle}
      ></TodoList>
    </TodoTemplate>
  );
}

export default App;
