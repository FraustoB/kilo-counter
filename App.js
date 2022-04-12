import "./App.css";
import { Counter } from "./features/counter/counter";
import { ReadCounter } from "./components/readCounter";
import { PlateAdder } from "./features/plates/plateAdder";

function App() {
  const name = "jadelyn";
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">
        Hello world! From Jadelyn
      </h1>
      {name}
      <Counter />
      <ReadCounter />
      <PlateAdder />
    </div>
  );
}

export default App;
