import React from "react";

const onBlurHandler = (e) => {
  console.log("Hey! Eyes on me!");
};
const onFocusHandler = (e) => {
  console.log("Good!");
};

function EyesOnMe() {
  return (
    <button onBlur={onBlurHandler} onFocus={onFocusHandler}>
      Eyes on me
    </button>
  );
}

export default EyesOnMe;
