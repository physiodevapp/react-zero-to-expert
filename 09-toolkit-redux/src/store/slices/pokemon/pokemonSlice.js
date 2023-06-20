import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  page: 0,
  pokemons: [],
  isLoading: false,
}

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    startLoadingPokemon: (state, /*action*/) => {
      //Examples:
      //state.page += 1
      //state.page += action.payload
      state.isLoading = true
    },
    setPokemons: (state, action) => {
      state.isLoading = false;
      state.page = action.payload.page;
      state.pokemons = action.payload.pokemons;
      console.log(action)
    }
  },
})

export const { startLoadingPokemon, setPokemons } = pokemonSlice.actions