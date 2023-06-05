import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = (category) => {

  const [gifs, setGifs] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    try {
      (async function newImages() {
        const newGifs = await getGifs(category);
        setGifs(newGifs);
        setIsLoading(false)
      })();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return {
    gifs,
    isLoading
  }
}
