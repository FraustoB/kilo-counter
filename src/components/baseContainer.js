import React from "react";

import { PlateAdder } from "../features/plates/plateAdder";
import { useSelector } from "react-redux";

export function BaseContainer() {
  const curPlate = useSelector((state) => state.plates.value);
  const curAmount = useSelector((state) => state.counter.value);

  return (
    <div className="flex flex-col justify-center items-center">
      This is the base container for my project
      <br />
      Current Load is
      {curPlate}
      <br />
      {curAmount}
      <br />
      <PlateAdder />
    </div>
  );
}
