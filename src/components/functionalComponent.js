import React from "react";
import { useParams } from "react-router-dom";

const FunctionalComponent = () => {
 
  console.log("params", useParams());

  const { id } = useParams();
  return (
    <>
      <h1> Soc un dinamic Component i el meu param es: {id} </h1>
    </>
  );
};

export default FunctionalComponent;
