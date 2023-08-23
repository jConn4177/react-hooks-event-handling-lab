import React from "react";

function onChangeHandler(e) {
  console.log("Entering password...");
}

function Keypad() {
  return <input onChange={onChangeHandler} type="password"></input>;
}

export default Keypad;
