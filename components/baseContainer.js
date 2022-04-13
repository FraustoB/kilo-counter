import React from "react";
import { Counter } from "../features/counter/counter";
import { PlateAdder } from "../features/plates/plateAdder";
import { useSelector } from "react-redux";

export function BaseContainer() {
  return (
    <div className="flex flex-col justify-center items-center">
      This is the base container for my project
      <Counter />
      <PlateAdder />
    </div>
  );
}
