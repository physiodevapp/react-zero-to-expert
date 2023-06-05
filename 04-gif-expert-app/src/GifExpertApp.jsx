import React, { useState } from "react";

function GifExpertApp() {
  const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

  console.log(categories)

  return (
    <>
      {/* title */}
      <h1>GifExpertApp</h1>

      {/* input */}

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
