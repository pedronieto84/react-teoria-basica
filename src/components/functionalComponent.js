import React, { useEffect } from "react";

const FunctionalComponent = () => {
  useEffect(() => {
    console.log("use effect");
  });

  return (
    <>
      <h1> Soc un Functional Component </h1>

      <div>USE EFFECT</div>
    </>
  );
};

export default FunctionalComponent;
