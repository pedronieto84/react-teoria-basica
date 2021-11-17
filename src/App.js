import "./App.css";

import ClassComponent from "./components/classComponent";
import React, { Component } from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = { data: 0, showChild: true };
  }

  render() {
    let componentChildren;

    if (this.state.showChild) {
      componentChildren = <ClassComponent data={this.state.data} />;
    }
    return (
      <>
        <button
          onClick={() => {
            this.setState({ showChild: !this.state.showChild });
          }}
        >
          ELIMINAR COMPONENTE HIJO
        </button>
        {componentChildren}
      </>
    );
  }
}

export default App;
