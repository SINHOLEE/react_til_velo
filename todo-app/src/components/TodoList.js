import React, { useCallback } from 'react';
import { List } from 'react-virtualized';
import TodoListItem from './TodoListItem';
import './TodoList.scss';

const TodoList = ({ todos, onRemove, onToggle }) => {
  const rowRenderer = useCallback(
    ({ index, key, style }) => {
      console.log(key, ' ', style);
      const todo = todos[index];
      return (
        <TodoListItem
          todo={todo}
          key={key}
          onRemove={onRemove}
          onToggle={onToggle}
          style={style}
        />
      );
    },
    [todos, onRemove, onToggle],
  );

  return (
    <List
      className="TodoList"
      width={512}
      height={700}
      rowCount={todos.length}
      rowHeight={57}
      rowRenderer={rowRenderer}
      list={todos}
    ></List>
  );
};

// 현재 상황에서는 todos의 변경에서만 todolist가 리랜더링 되므로 최적화 할 필요는 없다.
// 다만 부모 컴포넌트인 app이 리 랜더링 되는 요인이 todo가 아닌 다른 요소에 의해 발생할 경우도 나중에
// 생길 수 있기 때문에 미리 최적화를 해논다.
// list최적화를 위해서는 item과 list 모두 최적화 해야한다.
export default React.memo(TodoList);
