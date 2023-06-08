import React, { useState } from "react";
import { useCounter } from "../hooks";
import {Small} from "./Small";

function Memorize() {
  const { counter, increment } = useCounter(10);
  const [show, setShow] = useState(true)

  return (
    <>
      <h1>
        Counter: <Small value={counter} />
      </h1>
      <hr />

      <button className="btn btn-primary" onClick={() => increment()}>
        +1
      </button>

      <button 
      onClick={() => setShow(!show)}
      className="btn btn-outline-primary">
        Show/Hide {JSON.stringify(show)}
      </button>
    </>
  );
}

export default Memorize;
