import React, { useState } from "react";

export const AddCategory = ({ onAddCategory }) => {
  const [inputValue, setInputValue] = useState("One Punch");

  const handleInputChange = (event) => {
    setInputValue(() => event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) {
      return;
    } else {
      onAddCategory(inputValue.trim())
      setInputValue('')
    }
  };

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
