import logo from "./logo.svg";
import "./App.css";
import { Counter } from "./features/counter/counter";
import { ReadCounter } from "./components/readCounter";
import { PlateAdder } from "./features/plates/plateAdder";

function App() {
  const name = "jadelyn";
  return (
    <div className="App">
      Hello World
      {name}
      <Counter />
      <ReadCounter />
      <PlateAdder />
    </div>
  );
}

export default App;
