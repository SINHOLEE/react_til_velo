import React from "react";
import {Link, Route} from "react-router-dom";
import profile from "./profile";
const Profiles = ({match}) => {
  console.log("profiles", match);
  return (
    <div>
      <ul>
        <li>
          <Link to="/profiles/1">1번 사람 링크</Link>
        </li>
        <li>
          <Link to="/profiles/2">2번 사람 링크</Link>
        </li>
      </ul>
      <Route path="/profiles" render={() => <div>사용자를 선택해 주세요</div>}></Route>
      <Route path="/profiles/:userId" component={profile}></Route>
    </div>
  );
};

export default Profiles;
