import React, { useCallback, useRef, useReducer } from 'react';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';

function createBulkTodos() {
  const arr = [];
  for (let id = 0; id < 5000; id++) {
    arr.push({
      id,
      text: `할 일${id}`,
      checked: false,
    });
  }
  return arr;
}

function reducer(todos, action) {
  switch (action.type) {
    case 'INSERT':
      return todos.concat(action.todo);
    case 'REMOVE':
      return todos.filter((todo) => todo.id !== action.id);
    case 'TOGGLE':
      return todos.map((todo) =>
        todo.id === action.id ? { ...todo, checked: !todo.checked } : todo,
      );
    default:
      return todos;
  }
}

const App = () => {
  // 해당 state를 관리하는 component 의 메소드는 해당 component에서 생성하고 자식 컴포넌트에게 내려준다.
  // 만약 부모 혹은 조상 component에서 어떤 값이 내려오는 props가 현재 state와 충돌이 일어날 상황이 있다면? 어떻게해야하지

  const [todos, dispatch] = useReducer(reducer, undefined, createBulkTodos);
  const nextId = useRef(5000);

  const onToggle = useCallback((id) => {
    dispatch({ type: 'TOGGLE', id });
  }, []);

  const onInsert = useCallback((text) => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };
    dispatch({ type: 'INSERT', todo });
    nextId.current += 1; // useRef를 통해 선언한 변수는 리랜더링 발생 안함
  }, []);

  const onRemove = useCallback((id) => {
    dispatch({ type: 'REMOVE', id });
  }, []);
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
};

export default App;
