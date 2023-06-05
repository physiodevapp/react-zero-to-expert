import React, { useState } from "react";

function AddCategory() {
  const [inputValue, setInputValue] = useState("One Punch");

  const handleInputChange = (event) => {
    setInputValue(() => event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputValue)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search GIFs"
          value={inputValue}
          onChange={handleInputChange}
        />
      </form>
    </>
  );
}

export default AddCategory;
