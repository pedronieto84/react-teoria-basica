import React from "react";

const FunctionalComponent = ({ childToParent }) => {
  const dataInChildren = "data from children";
  return (
    <>
      <h1> Soc un functional Component </h1>
      <button onClick={() => childToParent(dataInChildren)}>
        PASAR DATA AL PARE
      </button>
    </>
  );
};

export default FunctionalComponent;
