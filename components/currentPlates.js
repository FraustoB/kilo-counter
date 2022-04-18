import React from "react";
import { useSelector } from "react-redux";
import { v4 } from "uuid";
import { v4 as uuidv4 } from "uuid";

export function CurrentPlates() {
  const arrayOfPlates = useSelector((state) => state.plates.value);

  const currentPlates = arrayOfPlates.map((thisPlate) => {
    if (thisPlate.plate != "") {
      return (
        <div className="flex flex-col items-center" key={v4()}>
          {thisPlate.weight}
          <div
            // id={v4()}
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
      <div className="flex flex-row h-32">{currentPlates}</div>
    </div>
  );
}
