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
  const [curPlate, setCurPlate] = useState({
    amount: [],
    color: "",
  });

  //function that updates both the counterReducer and plateReducer using batch from
  //react-redux
  const updatePlate = (dispatch, color, amount) => {
    //updates component state that tracks which plate
    //color and number that has been added to the bar.
    setCurPlate({
      color: color,
      amount: [...curPlate.amount, amount],
    });
    //batch dispatches plateReducer and counterReducer to updtate global
    //redux state
    batch(() => {
      dispatch(addPlate(color));
      dispatch(incrementByAmount(amount));
    });
  };

  //function takes away plate and amount of weight on the bar
  const takeawayPlate = (dispatch) => {
    //Running IF statement to ensure this function does not run if nothing is on the bar
    if (curPlate.amount.length > 0) {
      const num = curPlate.amount.pop();
      batch(() => {
        dispatch(removePlate());
        dispatch(decrementByAmount(num));
      });
    }
  };

  return (
    <div>
      <div className="flex flex-row text-sm overflow-x-scroll">
        <button
          className="flex-none bg-red-600"
          onClick={() => updatePlate(dispatch, "red", 25)}
        >
          red plate
        </button>
        <button
          className="flex-none bg-blue-600 text-white"
          onClick={() => updatePlate(dispatch, "blue", 20)}
        >
          blue Plate
        </button>
        <button
          className="flex-none bg-yellow-400"
          onClick={() => updatePlate(dispatch, "yellow", 15)}
        >
          Yellow Plate
        </button>
        <button
          className="flex-none bg-green-600 text-white"
          onClick={() => updatePlate(dispatch, "green", 10)}
        >
          green Plate
        </button>
        <button
          className="flex-none bg-stone-100 text-white"
          onClick={() => updatePlate(dispatch, "white", 5)}
        >
          White Plate
        </button>
      </div>

      <div className="flex flex-row items-center">
        <button onClick={() => takeawayPlate(dispatch, curPlate.color)}>
          Remove Plate
        </button>
        <button onClick={() => dispatch(resetPlate())}>Reset Plate</button>
      </div>
    </div>
  );
}
