import React from "react";

import { useSelector } from "react-redux";

export function ReadCounter() {
  const count = useSelector((state) => state.counter.value);
  return (
    <div>
      This is the readCounter function
      <b />
      {count}
    </div>
  );
}
