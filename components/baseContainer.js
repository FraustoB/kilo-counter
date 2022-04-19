import React from "react";

import { PlateAdder } from "../features/plates/plateAdder";
import { useSelector } from "react-redux";
import { CurrentPlates } from "./currentPlates";

export function BaseContainer() {
  // const curPlate = useSelector((state) => state.plates.value.plate);
  const curAmount = useSelector((state) => state.counter.value);
  const curKiloAmount = useSelector((state) => state.counter.kiloValue);

  return (
    <div className=" w-auto lg:w-3/4 lg:h-10/12">
      <div className="flex flex-col justify-center items-center ">
        <span className="font-semibold my-5 text-2xl underline decoration-solid">
          Current Weight
        </span>
        <span className="text-xl font-medium">{curKiloAmount} kg</span>
        <span className="text-xl font-medium">
          {Math.floor(curAmount * 100) / 100} lbs
        </span>
        <CurrentPlates />
        <PlateAdder />
      </div>
    </div>
  );
}
