import React from "react";
import GifItem from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

function GifGrid({ category }) {

  const {gifs, isLoading} = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {isLoading && <h2>Loading...</h2>}
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

export {
  GifGrid
};
