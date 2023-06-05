import React, { useState } from "react";

function GifExpertApp() {
  const [categories, setCategories] = useState(["One Punch", "Dragon Ball"]);

  const handleAddCategory = () => {
    setCategories((prevCategories) => {
      return ['Valorant', ...prevCategories]
    })
  };

  return (
    <>
      {/* title */}
      <h1>GifExpertApp</h1>

      {/* input */}

      {/* item-list */}

      <button onClick={handleAddCategory}>Add category</button>

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
