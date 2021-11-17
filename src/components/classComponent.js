import React, { Component } from "react";

class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <h1 class="card">Soc un class component</h1>;
        <p> Props String: {this.props.propFuncString} </p>
        <p> Props Object: {this.props.propFuncObject.que} </p>
        <p> Props Number: {this.props.propFuncNumber} </p>
      </>
    );
  }
}

export default ClassComponent;
