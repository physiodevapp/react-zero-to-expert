import React, { useState } from "react";
import PropTypes from 'prop-types'

export const AddCategory = ({ onAddCategory }) => {
  const [inputValue, setInputValue] = useState('');

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
      <form onSubmit={handleSubmit} aria-label="form">
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

AddCategory.propTypes = {
  onAddCategory: PropTypes.func.isRequired
}
