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
          <Link to="/">Class </Link>
          <Link to="/functional">Functional</Link>
          <Link to={`/dinamic/${id}`}>Dinamic</Link>
        </nav>
        <div>
          <Switch>
            <Route exact path="/functional">
              <FunctionalComponent />
            </Route>
            <Route exact path="/class">
              <ClassComponent />
            </Route>
            <Route exact path="/dinamic/:id">
              <ClassComponent />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
