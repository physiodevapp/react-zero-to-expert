import React, { useState } from "react";
import { AddCategory, GifGrid } from './components/index'

function GifExpertApp() {
  const [categories, setCategories] = useState(["One Punch"]);

  const handleAddCategory = (newCategory) => {
    if (!categories.includes(newCategory)) {
      setCategories((prevCategories) => {
        return [newCategory, ...prevCategories];
      });
    }
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory onAddCategory={(category) => handleAddCategory(category)} />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
}

export default GifExpertApp;
