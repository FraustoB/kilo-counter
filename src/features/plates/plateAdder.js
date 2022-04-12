import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addPlate, removePlate } from "./plateSlice";

export function PlateAdder() {
  const curPlate = useSelector((state) => state.plates.value);
  const dispatch = useDispatch();

  return (
    <div>
      This is the plate adder
      <p>{curPlate}</p>
      <button onClick={() => dispatch(addPlate("yellow"))}>
        Click Me to add yellow Plate
      </button>
      <button onClick={() => dispatch(addPlate("blue"))}>
        Click Me to add blue Plate
      </button>
      <button onClick={() => dispatch(addPlate("black"))}>
        Click Me to add black Plate
      </button>
      TAILWIND GANG
      <button onClick={() => dispatch(removePlate())}> Remove Plate</button>
    </div>
  );
}
