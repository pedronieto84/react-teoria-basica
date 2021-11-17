import React, { Component } from "react";

class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { nom: "Joan" };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ nom: "Antoni" });
    }, 3000);
  }

  render() {
    return (
      <>
        <h1 class="card">State: {this.state.nom} </h1>;
      </>
    );
  }
}

export default ClassComponent;
