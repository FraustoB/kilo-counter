import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addPlate, removePlate, resetPlate } from "./plateSlice";

export function PlateAdder() {
  const curPlate = useSelector((state) => state.plates.value);
  const dispatch = useDispatch();

  return (
    <div>
      Current Plate
      <p>{curPlate}</p>
      <div className="flex flex-row text-sm">
        <button onClick={() => dispatch(addPlate("yellow"))}>
          yellow Plate
        </button>
        <button
          className="bg-black text-white"
          onClick={() => dispatch(addPlate("blue"))}
        >
          blue Plate
        </button>
        <button onClick={() => dispatch(addPlate("black"))}>black Plate</button>
      </div>
      <div className="flex flex-row items-center">
        <button onClick={() => dispatch(removePlate())}> Remove Plate</button>
        <button onClick={() => dispatch(resetPlate())}>Reset Plate</button>
      </div>
    </div>
  );
}
