import "./App.css";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import PageHome from "./pages/home";
import PageLogin from "./pages/login";
import PageRegister from "./pages/register";
import PageData from "./pages/data";
import PageProfile from "./pages/profile";
import { useCount } from "./context/count";

function App() {
  const { login, senha } = useCount();

  return (
    <Router>
      <div>
        <header>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/data">Data</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          </ul>
        </header>

        <Switch>
          <Route exact path="/login" component={PageLogin}></Route>
          <Route exact path="/data" component={PageData}></Route>
          <Route exact path="/register" component={PageRegister}></Route>
          <Route
            exact
            path="/profile"
            render={(props) =>
              login === "cauan" && senha === "123" ? (
                <PageProfile {...props} />
              ) : (
                <Redirect to="/login" />
              )
            }
          ></Route>
          <Route exact path="/" component={PageHome}></Route>
          <Redirect from="/" to="/home" exact />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
