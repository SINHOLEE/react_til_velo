import React from 'react';
import './TodoList.scss';
import TodoListItem from './TodoListItem';
const TodoList = ({ todos, onRemove, onToggle }) => {
  return (
    <div className="TodoList">
      {todos.map((todo) => (
        <TodoListItem
          key={todo.id}
          // todo객체를 한번에 넘겨줘도 되고, 각각의 attributes를 따로 보내도 된다.
          // checked={todo.checked}
          // text={todo.text}
          todo={todo}
          onRemove={onRemove} // 이 콜백함수를 사용하기 위해서, app => list => listItem순으로 거쳐야 함
          onToggle={onToggle}
        ></TodoListItem>
      ))}
    </div>
  );
};

export default TodoList;
