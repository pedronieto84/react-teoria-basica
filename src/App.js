import "./App.css";

import ClassComponent from "./components/classComponent";
import React, { Component } from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = { data: 0 };
  }

  render() {
    return (
      <>
        <button
          onClick={() => {
            this.setState({ data: this.state.data + 1 });
          }}
        >
          AÑADIR
        </button>
        <ClassComponent data={this.state.data} />
      </>
    );
  }
}

export default App;
