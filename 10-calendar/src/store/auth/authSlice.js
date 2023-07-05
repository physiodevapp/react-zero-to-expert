import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  status: 'checkin', // authenticated, not-authenticated,
  user: {},
  errorMessage: undefined
}

export const authSlice = createSlice({
  name: 'auth',
  initialState, 
  reducers: {
    onChecking: (state) => {
      state.status= 'checkin', // authenticated, not-authenticated,
      state.user= {},
      state.errorMessage= undefined
    },
    onLogin: (state, { payload }) => {
      state.status= 'authenticated', // authenticated, not-authenticated,
      state.user= payload,
      state.errorMessage= undefined
    },
    onLogout: (state, { payload}) => {
      state.status= 'not-authenticated', // authenticated, not-authenticated,
      state.user= {},
      state.errorMessage = payload
    },
    onClearingErrorMessage: (state) => {
      state.errorMessage= undefined
    }
  },
})

export const { onChecking, onLogin, onLogout, onClearingErrorMessage } = authSlice.actions