import React, { useState } from "react";

const FunctionalComponent = () => {

  const [count, setCount] = useState(0);
  const [paraula, setParaula] = useState("hola");

  return (
    <>
      <h1> Soc un Functional Component </h1>

      <div>
        <h1>Count {count}</h1>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Increase Count
        </button>
      </div>
      <br />
      <div>
        <h1>Count {paraula}</h1>
        <button
          onClick={() => {
            setParaula(paraula + "a");
          }}
        >
          Afegir A
        </button>
      </div>
    </>
  );
};

export default FunctionalComponent;
