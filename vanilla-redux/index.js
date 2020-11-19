import {createStore} from "redux";
const toggle = document.querySelector(".toggle");
const counter = document.querySelector(".counter");
const increse_btn = document.querySelector(".increase");
const decrese_btn = document.querySelector(".decrease");

// action 타입 선언
const TOGGLE_SWITCH = "TOGGLE_SWITCH";
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";

// action 함수 선언
const toggleSwitch = () => ({
  type: TOGGLE_SWITCH,
});
const increase = (difference) => ({
  type: INCREASE,
  difference,
});
const decrease = () => ({
  type: DECREASE,
});

// 초기 상태 설정
const initState = {
  toggle: false,
  counter: 0,
};

// reducer 함수 생성
function reducer(state = initState, action) {
  switch (action.type) {
    case INCREASE:
      return {...state, counter: state.counter + action.difference};
    case DECREASE:
      return {...state, counter: state.counter - 1};
    case TOGGLE_SWITCH:
      return {...state, toggle: !state.toggle};
    default:
      return state;
  }
}

// store 생성
const store = createStore(reducer);

const render = () => {
  console.log("render");
  const state = store.getState();
  if (state.toggle) {
    toggle.classList.add("active");
  } else {
    toggle.classList.remove("active");
  }
  counter.innerHTML = state.counter;
};
render();
// store에  render 함수 구독하기
// 스토어의 상태가 바뀔때마다 render함수를 호출하기 위해 구독모델을 사용
store.subscribe(render);

// 액션발생 -> dispatch
toggle.addEventListener("click", () => {
  store.dispatch(toggleSwitch());
});
increse_btn.addEventListener("click", () => {
  store.dispatch(increase(20));
});
decrese_btn.addEventListener("click", () => {
  store.dispatch(decrease());
});
