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

// 현재 상황에서는 todos의 변경에서만 todolist가 리랜더링 되므로 최적화 할 필요는 없다.
// 다만 부모 컴포넌트인 app이 리 랜더링 되는 요인이 todo가 아닌 다른 요소에 의해 발생할 경우도 나중에
// 생길 수 있기 때문에 미리 최적화를 해논다.
// list최적화를 위해서는 item과 list 모두 최적화 해야한다.
export default React.memo(TodoList);
