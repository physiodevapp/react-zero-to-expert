import React, { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import GifItem from "./GifItem";

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
      <div className="card-grid">
        {
          gifs.map((gif) => (
            <GifItem key={gif.id} {...gif}/>
          ))
        }
      </div>
    </>
  );
}

export default GifGrid;
