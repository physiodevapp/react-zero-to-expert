import React, { useState } from "react";

function CounterApp() {
  const [counters, setCounters] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
  });

  const { counter1, counter2, counter3 } = counters

  const handleclick = () => {
    setCounters(() => {
      return { 
        ...counters,
        counter1: counter1 + 1,
      }
    })
  }

  return (
    <>
      <h1>Counter: {counter1}</h1>
      <h1>Counter: {counter2}</h1>
      <h1>Counter: {counter3}</h1>

      <hr />

      <button className="btn btn-primary" onClick={handleclick}>+1</button>
    </>
  );
}

export default CounterApp;
