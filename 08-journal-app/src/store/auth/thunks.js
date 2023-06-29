import { loginWithEmailPassword, logoutFirebase, registerUserWithEmailPassword, signInWithGoogle } from "../../firebase/providers"
import { clearNotesLogout } from "../journal"
import { checkingCredentials, login, logout } from "./authSlice"

export const checkingAuthentication = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials())
  }
}

export const startGoogleSignIn = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials())

    const result = await signInWithGoogle();
    // console.log({result})

    if (result.ok) {
      delete result.ok
      dispatch(login(result))
    } else {
      dispatch(logout(result.errorMessage))
    }

  }
}

export const startCreatingWithEmailPassword = ({email, displayName, password}) => {
  return async(dispatch) => {

    dispatch(checkingCredentials())

    // console.log({email, displayName, password})
    const {ok, uid, photoURL, errorMessage} = await registerUserWithEmailPassword({email, password, displayName})
    // console.log({resp})

    if (!ok) {
      dispatch(logout({errorMessage}))
    } else {
      dispatch(login({displayName, uid, email, photoURL}))
    }

  }
}

export const startLoginWithEmailPassword = ({email, password}) => {
  return async(dispatch) => {
    dispatch(checkingCredentials())

    const { ok, uid,  displayName, errorMessage } = await loginWithEmailPassword({email, password})

    if (!ok) {
      dispatch(logout({errorMessage}))
    } else {
      dispatch(login({uid, email, displayName}))
    }
  }
}

export const startLogout = () => {
  return async (dispatch) => {

    try {
      await logoutFirebase()
      dispatch(clearNotesLogout())
      dispatch(logout())

    } catch (error) {
      console.log({error})
    }

  }
}