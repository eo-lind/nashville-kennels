import React, { useState } from "react";

export const Checkbox = () => {
  const [checkedState, setCheckedState] = useState(false);

  const handleChange = (event) => {
    // if (checkedState) {
    //   setCheckedState(false);
    // } else {
    //   setCheckedState(true);
    // }

    // this ternary statement does the same as the above if statement
    setCheckedState(checkedState ? false : true);

    // this also does the same as above (you're setting it to the opposite of whatever the checkedState was, because you're handling a *change* in the state)
    // setCheckedState(!checkedState)
  };

  return (
    <input type="checkbox" checked={checkedState} onChange={handleChange} />
  );
};
