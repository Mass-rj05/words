import React, { useEffect } from "react";

const CountDown = ({ counter, setCounter }) => {
  useEffect(() => {
    if (counter !== 0) {
      setTimeout(() => {
        setCounter(counter - 1);
      }, 1000);
    }
  }, [counter]);

  return <div>{counter !== 0 && counter}</div>;
};

export default CountDown;
