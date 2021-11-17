import React from "react";

const FunctionalComponent = (props) => {
  return (
    <>
      <h1> Soc un functional Component </h1>
      <p> Props String: { props.propFuncString } </p>
      <p> Props Object: { props.propFuncObject.que } </p>
      <p> Props Number: { props.propFuncNumber } </p>
    </>
  );
};

export default FunctionalComponent;
