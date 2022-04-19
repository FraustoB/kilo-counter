import React, { useState } from "react";
import { useSelector, useDispatch, batch } from "react-redux";
import { addPlate, removePlate, resetPlate } from "./plateSlice";
import {
  incrementByAmount,
  resetValue,
  decrementByAmount,
  incrementKiloByAmount,
  resetKiloValue,
  decrementKiloByAmount,
} from "../counter/counterSlice";

export function PlateAdder() {
  const dispatch = useDispatch();

  // Needed to create a state that tracks the current amount and color of the bar,
  //for takeawayPlate function needs to know what is the latest amount and color,
  // that was added to the bar
  const initState = { amount: [], color: "" };
  const [curPlate, setCurPlate] = useState({
    amount: [],
    color: "",
  });

  //function that updates both the counterReducer and plateReducer using batch from
  //react-redux

  const updatePlate = (dispatch, color, amount, size) => {
    //converts Kilos into Lbs, so that weight added to bar in shown in LBS
    //2.20462 is the conversion from kilos to lbs
    const weightInLbs = amount * 2.20462 * 2;

    //updates component state that tracks which plate
    //color and number that has been added to the bar.
    setCurPlate({
      color: color,
      amount: [...curPlate.amount, amount],
    });

    //batch dispatches plateReducer and counterReducer to update global
    //redux state. Adding both the plate color to the bar and the amount of weight that is being added ot the bar
    batch(() => {
      //dispatch to the plateSlice main store will be an object that will be used in other parts of our application,
      //dispatch to the counterSlice will only update the current weight of our bar. Will refactor
      dispatch(addPlate({ plate: color, weight: amount, size: size }));
      dispatch(incrementByAmount(weightInLbs));
      dispatch(incrementKiloByAmount(amount * 2));
    });
  };

  //function takes away plate and amount of weight on the bar
  const takeawayPlate = (dispatch) => {
    //Running IF statement to ensure this function does not run if nothing is on the bar
    if (curPlate.amount.length > 0) {
      //takes the last number in the state array that is being tracked
      const num = curPlate.amount.pop();
      //then converts that number in to LBS
      const weightInLbs = num * 2.20462 * 2;

      //Batch updates dispatches both to update global state
      batch(() => {
        dispatch(removePlate());
        dispatch(decrementByAmount(weightInLbs));
        dispatch(decrementKiloByAmount(num * 2));
      });
    }
  };

  //This handles resetting the current plates, current amounts, and current states
  // so that the bar is now empty
  const handleReset = (dispatch, initState) => {
    dispatch(resetPlate());
    dispatch(resetValue());
    dispatch(resetKiloValue());
    setCurPlate(initState);
  };

  return (
    <div className="flex flex-col md:w-fit w-screen">
      <div
        className="flex flex-row 
        text-md overflow-x-auto items-center scrollbar-thin
      scrollbar-thumb-gray-900 mb-5 "
      >
        <button
          className={`flex-none bg-red-600  rounded-full h-28 w-28 md:hover:scale-105`}
          onClick={() => updatePlate(dispatch, "bg-red-600", 25, "28")}
        >
          25kgs
        </button>
        <button
          className={`flex-none bg-blue-600 text-white rounded-full h-28 w-28 md:hover:scale-105`}
          onClick={() => updatePlate(dispatch, "bg-blue-600", 20, "28")}
        >
          20kgs
        </button>
        <button
          className={`flex-none bg-yellow-400 rounded-full h-24 w-24 md:hover:scale-105`}
          onClick={() => updatePlate(dispatch, "bg-yellow-400", 15, "24")}
        >
          15kgs
        </button>
        <button
          className={`flex-none bg-green-600 text-white rounded-full h-20 w-20 md:hover:scale-105`}
          onClick={() => updatePlate(dispatch, "bg-green-600", 10, "20")}
        >
          10kgs
        </button>

        <button
          className={`flex-none bg-stone-100 text-slate-900 rounded-full h-16 w-16 md:hover:scale-105`}
          onClick={() => updatePlate(dispatch, "bg-stone-100", 5, "16")}
        >
          5kgs
        </button>
        <button
          className={`flex-none bg-zinc-700 text-white rounded-full h-14 w-14 md:hover:scale-105`}
          onClick={() => updatePlate(dispatch, "bg-zinc-700", 2.5, "14")}
        >
          2.5
        </button>
        <button
          className={`flex-none bg-slate-400 text-white rounded-full h-10 w-10 md:hover:scale-105`}
          onClick={() => updatePlate(dispatch, "bg-slate-400", 5, "10")}
        >
          1.25
        </button>
      </div>

      <div className={`flex flex-row justify-center text-xl `}>
        <button
          className="bg-red-600 md:hover:scale-105"
          onClick={() => handleReset(dispatch, initState)}
        >
          Reset Bar
        </button>
        <button
          className="bg-green-800 md:hover:scale-105"
          onClick={() => takeawayPlate(dispatch, curPlate.color)}
        >
          Remove Plate
        </button>
      </div>
    </div>
  );
}
