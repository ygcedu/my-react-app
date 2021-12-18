import React from "react";
import Button from "components/Button";
import {
  HashRouter as Router,
  Link,
  Redirect,
  Route,
  Switch
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/home">主页</Link>
            </li>
            <li>
              <Link to="/about">关于</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Redirect exact from="/" to="/home" />
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

// 404 页面
function NoMatch() {
  return <div>页面不存在，你丫输错地址了吧！</div>;
}

function Home() {
  return <h1>主页</h1>;
}

function About() {
  return (
    <>
      <h1>关于</h1>
      <Button>按钮</Button>
    </>
  );
}

export default App;
