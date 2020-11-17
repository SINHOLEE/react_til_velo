import React, { useCallback, useRef, useState } from 'react';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';
import './App.css';

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

function App() {
  // 해당 state를 관리하는 component 의 메소드는 해당 component에서 생성하고 자식 컴포넌트에게 내려준다.
  // 만약 부모 혹은 조상 component에서 어떤 값이 내려오는 props가 현재 state와 충돌이 일어날 상황이 있다면? 어떻게해야하지

  const [todos, setTodos] = useState(createBulkTodos); // 최적화 포인트1 -> 함수를 한 번만 실행하도록 ()없이 함수만 넣는다.
  const onToggle = useCallback((id) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo,
      ),
    );
  }, []);
  const nextId = useRef(5000);
  const onInsert = useCallback((text) => {
    // 새로운 todos 객체 생성 궁금 concat vs []...todos, {}] 무슨차이? concat은 새로운 객체를 만드는거고,
    //...은 얕은 복사인건데 concat이 깊은복사를 한다고 생각하면 되나요?
    // const newTodos = [...todos, { id: nextId.current, text, checked: false }];
    setTodos((todos) =>
      todos.concat({
        id: nextId.current,
        text,
        checked: false,
      }),
    );
    nextId.current += 1; // useRef를 통해 선언한 변수는 리랜더링 발생 안함
  }, []);
  const onRemove = useCallback((id) => {
    // 최적화 포인트 3: setTodos를 함수형으로 업데이트를 선언하므로써
    // todos의 변화를 감지할 때마다 새로 생성했던 onRemove함수를 첫번째 랜더링에서만
    // 생성하게끔 고정하게 하는 효과를 기대할 수 있다.
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  }, []);
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
