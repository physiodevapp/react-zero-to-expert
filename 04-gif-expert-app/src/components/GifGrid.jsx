import React, {useEffect, useState} from "react";
import { getGifs } from "../helpers/getGifs";

function GifGrid({ category }) {
    
  useEffect(() => {
    getGifs(category);
  }, [])

  return (
    <>
      <h3>{category}</h3>
      <p>Hola Mundo</p>
    </>
  );
}

export default GifGrid;
