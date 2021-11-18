import React from "react";
import getData from "../hooks/getData";

const FunctionalComponent = () => {
  const { data } = getData();
  console.log("data", data);

  return (
    <>
      <h1> Soc un Functional Component amb un Custom Hook: {data[0].a} </h1>
    </>
  );
};

export default FunctionalComponent;
