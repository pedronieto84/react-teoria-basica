import "./App.css";

import ClassComponent from "./components/classComponent";
import FunctionalComponent from "./components/functionalComponent";
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Class </Link>
        <Link to="/functional">Functional</Link>
      </nav>
      <div>
        <Switch>
          <Route exact path="/functional">
            <FunctionalComponent />
          </Route>
          <Route exact path="/class">
            <ClassComponent />
          </Route>
          <Route exact path="/">
            <ClassComponent />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
