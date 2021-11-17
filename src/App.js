import "./App.css";
import FunctionalComponent from "./components/functionalComponent";
import {useState} from 'react'

function App() {

  const [data, setData] = useState('')

  const childToParent = (dataReceivedFromChildren) => {
    console.log("data received", dataReceivedFromChildren);
    setData(dataReceivedFromChildren)
  };



  return (
    <>
      <h1> Data received from Children: {data}</h1>
      <FunctionalComponent childToParent={childToParent} />
    </>
  );
}

export default App;
