import React, { useState } from "react";

function AddCategory({ onAddCategory: setCategories }) {
  const [inputValue, setInputValue] = useState("One Punch");

  const handleInputChange = (event) => {
    setInputValue(() => event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) {
      return;
    } else {
      setCategories((prevCategories) => {
        return [inputValue, ...prevCategories];
      });
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

export default AddCategory;
