import { useReducer } from "react";
// custom hooks을 만들 수 있다. 어떻게가능한가? reducer를 이용해 바깥으로 뺄 수 있기 때문에
function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  };
}

export default function useInputs(initialForm) {
  const [state, dispatch] = useReducer(reducer, initialForm);
  const onChange = (e) => {
    dispatch(e.target);
  };

  return [state, onChange];
}
