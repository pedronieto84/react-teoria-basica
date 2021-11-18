import "./App.css";

import ClassComponent from "./components/classComponent";
import FunctionalComponent from "./components/functionalComponent";
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

class App extends React.Component {
  constructor() {
    super();
    this.state = { id: 1 };
  }

  render() {
    const { id } = this.state;
    return (
      <Router>
        <nav>
          <Link to="/">Functional </Link>
        </nav>
        <div>
          <Switch>
            <Route exact path="/">
              <FunctionalComponent />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
