import React, { Component } from "react";

class ClassComponent extends React.Component {
  constructor() {
    super();
    this.state = { valueTwice: 0 };
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps");
    return { valueTwice: props.data * 2 };
  }

  componentDidMount() {
    console.log("component did mount");
  }

  render() {
    console.log("render");
    return (
      <>
        <h1 class="card">State: {this.state.valueTwice} </h1>;
      </>
    );
  }

  componentDidMount() {
    console.log("component did mount");
  }
}

export default ClassComponent;
