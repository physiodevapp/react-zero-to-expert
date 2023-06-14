import React, { useReducer } from 'react'
import { AuthContext } from './AuthContext'
import { authReducer } from './authReducer'
import { types } from '../types/types'

const initialAuthState = {
  logged: false,
}


export const AuthProvider = ({children}) => {
  
  const [authState, authDispatch] = useReducer(authReducer, initialAuthState)
  
  const handleLogin = (userName = '') => {
    const action = {
      type: types.login,
      payload: {
        id: '0',
        name: userName
      }
    }

    authDispatch(action)
  }

  return (
    <AuthContext.Provider value={{
      ...authState,
      login: handleLogin
    }}>
      {children}
    </AuthContext.Provider>
  )
}
