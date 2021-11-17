import "./App.css";
import ClassComponent from "./components/classComponent";
import FunctionalComponent from "./components/functionalComponent";

function App() {
  const propFuncString = "soc un prop string";
  const propFuncObject = {
    que: "soc un prop Func OBJECT",
  };
  return (
    <>
      <FunctionalComponent
        propFuncString={propFuncString}
        propFuncObject={propFuncObject}
        propFuncNumber={3}
      />
      <ClassComponent />
    </>
  );
}

export default App;
