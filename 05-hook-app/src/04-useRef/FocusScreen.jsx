import React, { useRef } from "react";

function FocusScreen() {

  const inputRef = useRef()

  const handleClick = () => {
    inputRef.current.select()
  }

  return (
    <>
      <h1>FocusedScreen</h1>
      <hr />

      <input 
        ref={inputRef}
        type="text" 
        className="form-control"
      />

      <button onClick={handleClick} className="btn btn-primary mt-2">Focus</button>
    </>
  );
}

export default FocusScreen;
