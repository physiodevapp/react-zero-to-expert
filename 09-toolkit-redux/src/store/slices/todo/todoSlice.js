import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  counter: 10,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state, action) => {
      //state.counter += 1
      //state.counter += action.payload
    },
  },
})

export const { increment} = counterSlice.actions