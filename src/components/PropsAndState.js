import React, { useState } from "react";
import { Checkbox } from "./Checkbox";

export const PropsAndState = ({ yourName }) => {
  let [countClicks, setCountClicks] = useState(0);

  const handleClick = () => {
    //good practice:
    //make a copy of state, modify it, and then setState to the copy
    const newCountClicks = ++countClicks;
    setCountClicks(newCountClicks);
  };

  return (
    <>
      <Checkbox />
      <h3>Welcome, {yourName} </h3>
      <p>{countClicks}</p>
      <button onClick={handleClick}>Click Me</button>
    </>
  );
};


// countdown
// TODO unfinished

export const Countdown  = () => {
  let [countdownTimer, setCountdownTimer ] = useState(10)
  
  const handleClick = () => {
    const newCountdownTimer = --countdownTimer
    setCountdownTimer(newCountdownTimer)
  }

  return (
    <>
      <p>{countdownTimer}</p>
      <button onClick={handleClick}>Click Me</button>
    </>
  )
}

//end countdown