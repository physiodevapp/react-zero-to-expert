import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "./store/slices/pokemon";

export const PokemonApp = () => {

  const {pokemons = [], page, isLoading} = useSelector((state) => state.pokemon)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPokemons())
  }, [])
  

  return (
    <>
      <h1>PokemonApp</h1>
      <hr />
      {isLoading && <span>Loading pokemons...</span>}

      <ul>
        {pokemons?.map((pokemon) => (
          <li key={pokemon.name}>{pokemon.name}</li>
        ))}
      </ul>

      <button disabled={isLoading} onClick={() => dispatch(getPokemons(page))}>Next 10 pokemons</button>
    </>
  );
};
