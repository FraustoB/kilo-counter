import React, { useState } from "react";
import { useSelector, useDispatch, batch } from "react-redux";
import { addPlate, removePlate, resetPlate } from "./plateSlice";
import {
  incrementByAmount,
  resetValue,
  decrementByAmount,
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
  const updatePlate = (dispatch, color, amount) => {
    //converts Kilos into Lbs, so that weight added to bar in shown in LBS
    const weightInLbs = amount * 2.2;
    //updates component state that tracks which plate
    //color and number that has been added to the bar.
    setCurPlate({
      color: color,
      amount: [...curPlate.amount, amount],
    });
    //batch dispatches plateReducer and counterReducer to update global
    //redux state. Adding both the plate color to the bar and the amount of weight that is being added ot the bar

    batch(() => {
      dispatch(addPlate(color));
      dispatch(incrementByAmount(weightInLbs));
    });
  };

  //function takes away plate and amount of weight on the bar
  const takeawayPlate = (dispatch) => {
    //Running IF statement to ensure this function does not run if nothing is on the bar
    if (curPlate.amount.length > 0) {
      //takes the last number in the state array that is being tracked
      const num = curPlate.amount.pop();
      //then converts that number in to LBS
      const weightInLbs = num * 2.2;

      //Batch updates dispatches both to update global state
      batch(() => {
        dispatch(removePlate());
        dispatch(decrementByAmount(weightInLbs));
      });
    }
  };

  //This handles resetting the current plates, current amounts, and current states
  // so that the bar is now empty
  const handleReset = (dispatch, initState) => {
    dispatch(resetPlate());
    dispatch(resetValue());
    setCurPlate(initState);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-row text-sm overflow-x-scroll">
        <button
          className="flex-none bg-red-600"
          onClick={() => updatePlate(dispatch, "red", 25)}
        >
          25KGs
        </button>
        <button
          className="flex-none bg-blue-600 text-white"
          onClick={() => updatePlate(dispatch, "blue", 20)}
        >
          20Kgs
        </button>
        <button
          className="flex-none bg-yellow-400"
          onClick={() => updatePlate(dispatch, "yellow", 15)}
        >
          15KGs
        </button>
        <button
          className="flex-none bg-green-600 text-white"
          onClick={() => updatePlate(dispatch, "green", 10)}
        >
          10Kgs
        </button>

        <button
          className="flex-none bg-stone-100 text-white"
          onClick={() => updatePlate(dispatch, "white", 5)}
        >
          5kgs
        </button>
      </div>

      <div className="flex flex-row items-center">
        <button
          className=""
          onClick={() => takeawayPlate(dispatch, curPlate.color)}
        >
          Remove Plate
        </button>
        <button onClick={() => handleReset(dispatch, initState)}>
          Reset Bar
        </button>
      </div>
    </div>
  );
}
