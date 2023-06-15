import React, { useEffect, useReducer } from 'react'
import { AuthContext } from './AuthContext'
import { authReducer } from './authReducer'
import { types } from '../types/types'

const initAuthState = () => {
  const user = JSON.parse(localStorage.getItem('user'))

  return {
    logged: !!user,
    user
  }
}

export const AuthProvider = ({children}) => {
  const [authState, authDispatch] = useReducer(authReducer, {}, initAuthState) 
  
  const handleLogin = (name = '') => {
    const user = {
      id: 0,
      name
    }
    const action = {
      type: types.login,
      payload: user
    }

    localStorage.setItem('user', JSON.stringify(user))

    authDispatch(action)
  }

  const handleLogout = () => {
    localStorage.removeItem('user');

    const action = {
      type: types.logout
    }

    authDispatch(action)
  }

  return (
    <AuthContext.Provider value={{
      ...authState,
      login: handleLogin,
      logout: handleLogout
    }}>
      {children}
    </AuthContext.Provider>
  )
}
