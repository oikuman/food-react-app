import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import { NavLink } from "react-router-dom";
import Menu from "./Menu/Menu";
import Signup from "./Sinup/Signup";

function App() {
  return (
    <div>
      <ul className="list">
        <NavLink to="/signup" className="link" activeClassName="selected">
          Signup
        </NavLink>
        <NavLink to="/products" className="link" activeClassName="selected">
          Products
        </NavLink>
      </ul>
      <Switch>
        <Route path="/products" component={Menu} />
        <Route path="/signup" component={Signup} />
        <Redirect to="/signup" />
      </Switch>
    </div>
  );
}

export default App;
