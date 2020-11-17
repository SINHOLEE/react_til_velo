import React from 'react';
import cn from 'classnames';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import './TodoListItem.scss';

const TodoListItem = ({ todo, onRemove, onToggle }) => {
  const { id, checked, text } = todo; // 객체 비구조화 할당
  // const onClick = (e) => {
  //   const result = window.confirm('지우실건가요?');
  //   if (result) {
  //     onRemove(id);
  //   }
  //   // 이때는 왜 useCallback을 쓰지 않는거지?
  // };

  return (
    <div className="TodoListItem">
      <div className={cn('checkboxWrapper', { checked })}>
        <div
          className={cn('checkbox')}
          onClick={() => {
            onToggle(id);
          }}
        >
          {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        </div>
        <div className={cn('text')}>{text}</div>
      </div>
      <div
        className="remove"
        onClick={() => {
          onRemove(id);
        }}
      >
        <MdRemoveCircleOutline></MdRemoveCircleOutline>
      </div>
    </div>
  );
};
// 최적화포인트2: 해당 컴포넌트에서, todo, onRemove, onToggle이 바뀌지 않는다면 리랜더링이 발생하지 않는다,
// 하지만 메모만 쓴다면 todos가 업데이트 될때마다 onRemove, onToggle가 새롭게 바뀌기 때문에 리랜더링이 발생한다.
// app.js에서 onToggle과 onRemove에 useCallback을 사용해서 첫번째 랜더링에서만 생성하도록 하게 했지만, todos가 바뀌면서 발생하는
// 리랜더링에서는 onRemove와 onToggle이 새로 생성되므로 리랜더링이 발생할 수 밖에 없다.
// 해결할 수 있는방법은 두가지, 1) useState 함수형 업데이트, 2) reducer를 이용한 state관리
export default React.memo(TodoListItem);
