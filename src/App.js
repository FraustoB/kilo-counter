import "./App.css";
import { Counter } from "./features/counter/counter";
import { ReadCounter } from "./components/readCounter";
import { PlateAdder } from "./features/plates/plateAdder";

import { BaseContainer } from "./components/baseContainer";

function App() {
  return (
    <div className="flex items-center flex-col bg-stone-800 text-white">
      <h1 className="text-3xl font-bold underline">KILO-CALCULATOR</h1>
      <BaseContainer />
    </div>
  );
}

export default App;
