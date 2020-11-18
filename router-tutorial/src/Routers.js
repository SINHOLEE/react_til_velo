import About from "./About";
import Home from "./Home";
import profile from "./profile";

import React from "react";
import {Route, Link} from "react-router-dom";
import Profiles from "./Profiles";

const Routers = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/about">정보</Link>
        </li>
        <li>
          <Link to="/profiles">profiles</Link>
        </li>
      </ul>
      <Route path="/" component={Home} exact={true}></Route>
      <Route path={["/about", "/info"]} component={About}></Route>
      <Route path="/profiles" component={Profiles} exact></Route>
      {/* <Route path="/profiles/:userId" component={profile} exact></Route> */}
    </div>
  );
};

export default Routers;
