import React from "react";
const users = [
  {id: 1, name: "sinho", username: "dltlsgh5@naver.com", is_staff: true},
  {id: 2, name: "ghhh", username: "gogogo@hoht.cot", is_staff: false},
];

function isEmptyObject(obj) {
  return Object.keys(obj).length === 0 && obj.constructor === Object;
}

const findUserById = (id) => {
  return users.find((user) => user.id === parseInt(id));
};

const isExisted = (user) => {
  if (isEmptyObject(user)) {
    return false;
  }
  return true;
};

const profile = ({match}) => {
  console.log("profile", match);
  const user = findUserById(match.params.userId) || {};

  if (isExisted(user)) {
    return (
      <div>
        <div style={{height: "10px"}}></div>
        <div>pk:{user.id}</div>
        <div>이름:{user.name}</div>
        <div>아이디:{user.username}</div>
      </div>
    );
  }
  return <div>bad</div>;
};

export default profile;
