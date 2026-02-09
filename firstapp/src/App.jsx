import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Product } from "./components/Product";
import { Category } from "./components/Category";
import Counter from "./components/Counter";
import ShortCircuit from "./components/ShortCircuit";
import Students from "./components/Students";
import School from "./components/School";

function App() {
  return (
    <>
      {/* <h1>Hello</h1>
      
     
      <Counter />
      <ShortCircuit /> */}
      {/* <Students /> */}
      {/* <Product /> */}
      <Category id={101} name={"Electronics"} />
      <Category id={102} name={"C2"} />
      <hr />
      <School id={"SCH1"} name={"Daffodils"} address={"Mumbai"} />
      
    </>
  );
}

export default App;
