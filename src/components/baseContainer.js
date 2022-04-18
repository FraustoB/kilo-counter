import React from "react";

import { PlateAdder } from "../features/plates/plateAdder";
import { useSelector } from "react-redux";
import { CurrentPlates } from "./currentPlates";

export function BaseContainer() {
  // const curPlate = useSelector((state) => state.plates.value.plate);
  const curAmount = useSelector((state) => state.counter.value);

  return (
    <div className=" w-auto lg:w-3/4">
      <div className="flex flex-col justify-center items-center ">
        <span className="font-semibold text-base">Current Weight (lbs)</span>
        <CurrentPlates />
        <br />
        {Math.floor(curAmount * 100) / 100}
        <br />
        <PlateAdder />
      </div>
    </div>
  );
}
