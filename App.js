import "./App.css";

import { BaseContainer } from "./components/baseContainer";

function App() {
  return (
    <div className="flex items-center justify-center flex-col bg-stone-800 text-white h-screen">
      <div className="flex flex-col items-center bg-stone-600 rounded-lg  ">
        <h1 className="text-3xl font-bold underline mt-4 mb-4">
          KILO-CALCULATOR
        </h1>
        <BaseContainer />
      </div>
    </div>
  );
}

export default App;
