import React from 'react';
import './TodoList.scss';
import TodoListItem from './TodoListItem';
const TodoList = ({ todos }) => {
  return (
    <div className="TodoList">
      {todos.map((todo) => (
        <TodoListItem
          key={todo.id}
          // todo객체를 한번에 넘겨줘도 되고, 각각의 attributes를 따로 보내도 된다.
          // checked={todo.checked}
          // text={todo.text}
          todo={todo}
        ></TodoListItem>
      ))}
    </div>
  );
};

export default TodoList;
