import "./App.css";
import {Route, Link} from "react-router-dom/cjs/react-router-dom";
import Routers from "./Routers";
import Home from "./Home";
import About from "./About";
import Profiles from "./Profiles";
import profile from "./profile";

function App() {
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
      <Route path="/profiles" component={Profiles}></Route>
      {/* <Route path="/profiles/:userId" component={profile} exact></Route> */}
    </div>
  );
}

export default App;
