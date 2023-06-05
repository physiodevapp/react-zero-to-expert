import React, { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

function GifGrid({ category }) {
  const [gifs, setGifs] = useState();

  useEffect(() => {
    try {
      (async function newImages() {
        const newGifs = await getGifs(category);
        setGifs(newGifs);
      })();
    } catch (error) {
      console.log(error);
    }
  }, []);

  if (!gifs) {
    return (
      <>
        Loading...
      </>
    )
  }

  return (
    <>
      <h3>{category}</h3>
      <ol>{gifs.map((gif) => (
        <li key={gif.id}>{gif.title}</li>
      ))}
      </ol>
    </>
  );
}

export default GifGrid;
