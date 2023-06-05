import React from "react";
import GifItem from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

function GifGrid({ category }) {

  const {gifs, isLoading} = useFetchGifs(category);

  console.log(isLoading)

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
