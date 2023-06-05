import React, { useState } from "react";
import AddCategory from "./components/AddCategory";

function GifExpertApp() {
  const [categories, setCategories] = useState(["One Punch", "Dragon Ball"]);

  const handleAddCategory = (newCategory) => {
    setCategories((prevCategories) => {
      return [newCategory, ...prevCategories]
    })
  };

  return (
    <>
      {/* title */}
      <h1>GifExpertApp</h1>

      {/* input */}
      <AddCategory 
        onAddCategory = {(category) => handleAddCategory(category)}
      />

      {/* item-list */}

      <ol>
        {categories.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ol>

      {/* item */}
    </>
  );
}

export default GifExpertApp;
