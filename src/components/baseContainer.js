import React from "react";
import { Counter } from "../features/counter/counter";
import { PlateAdder } from "../features/plates/plateAdder";
import { useSelector } from "react-redux";

export function BaseContainer() {
  const curPlate = useSelector((state) => state.plates.value);
  const curAmount = useSelector((state) => state.counter.value);

  return (
    <div className="flex flex-col justify-center items-center">
      This is the base container for my project Current Load is
      {curPlate}
      <br />
      {curAmount}
      <br />
      <PlateAdder />
    </div>
  );
}
