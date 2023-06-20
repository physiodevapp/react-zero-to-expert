import { pokemonApi } from "../../../api/pokemonApi";
import { setPokemons, startLoadingPokemon } from "./pokemonSlice"

export const getPokemons = (page = 0 ) => {
  return async ( dispatch, getState ) => {
    dispatch(startLoadingPokemon());

    // TODO: Realizar http request
    // const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`)
    // const data = await resp.json();
    const { data } = await pokemonApi(`/pokemon?limit=10&offset=${page * 10}`)

    dispatch(setPokemons({pokemons: data.results, page: page + 1}))
  }
}