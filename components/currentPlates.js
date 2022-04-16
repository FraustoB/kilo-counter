import React from "react";

import { useSelector } from "react-redux";

export function CurrentPlates() {
  const arrayOfPlates = useSelector((state) => state.plates.value);

  console.log(`the array of plates is ${arrayOfPlates.plate}`);
  const currentPlates = arrayOfPlates.map((thisPlate) => {
    if (thisPlate.plate != "") {
      return (
        <div className="flex flex-col items-center">
          {thisPlate.weight}
          <div
            className={`${thisPlate.plate}  h-full outline outline-black outline-1 w-5 `}
          ></div>
        </div>
      );
    }
  });

  //reminder to myself; I am pulling an ARRAY; so I need to get
  //the array position BEFORE I can look into the object that
  //the array holds smh My Head
  // console.log(arrayOfPlates[0].weight);

  return (
    <div>
      This is the Current Plates
      <div className="flex flex-row h-20">{currentPlates}</div>
    </div>
  );
}
