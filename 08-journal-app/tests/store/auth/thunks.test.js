import { loginWithEmailPassword, logoutFirebase, signInWithGoogle } from "../../../src/firebase/providers"
import { checkingCredentials, login, logout } from "../../../src/store/auth/authSlice"
import { checkingAuthentication, startGoogleSignIn, startLoginWithEmailPassword, startLogout } from "../../../src/store/auth/thunks"
import { clearNotesLogout } from "../../../src/store/journal"
import { demoUser } from "../../fixtures/authFixtures"

jest.mock("../../../src/firebase/providers")

describe('Testing authThunks', () => { 
  const dispatch = jest.fn()

  beforeEach(() => jest.clearAllMocks())
  
  test('should invoke checkingCredentials', async() => { 
    await checkingAuthentication()(dispatch)

    expect(dispatch).toHaveBeenCalledWith(checkingCredentials())
  });

  test('should invoke checkingCredentials & successfull login', async () => { 
    const loginData = {ok: true, ...demoUser}
    // console.log(loginData)
    await signInWithGoogle.mockResolvedValue(loginData)

    await startGoogleSignIn()(dispatch)
    
    expect(dispatch).toHaveBeenCalledWith(checkingCredentials())
    expect(dispatch).toHaveBeenCalledWith(login(loginData))
  });

  test('should invoke checkingCredentials & error logout', async() => { 
    const loginData = {ok: false, errorMessage: 'Invalid authentication'}
    await signInWithGoogle.mockResolvedValue(loginData)  

    await startGoogleSignIn()(dispatch)

    expect(dispatch).toHaveBeenCalledWith(checkingCredentials())
    expect(dispatch).toHaveBeenCalledWith(logout(loginData.errorMessage))
  })

  test('should call checkingCredentials & success emailPassword login', async() => { 
    const loginData = {ok: true, ...demoUser}
    const formData = { email: demoUser.email, password:'123456'  } 

    await loginWithEmailPassword.mockResolvedValue(loginData)

    await startLoginWithEmailPassword(formData)(dispatch)

    expect(dispatch).toHaveBeenCalledWith(checkingCredentials())
    expect(dispatch).toHaveBeenCalledWith(login({uid: loginData.uid, displayName: loginData.displayName, email: loginData.email}))
  })

  test('should invoke logoutFirebase, logout & clearNotes', async() => { 
    await logoutFirebase()

    await startLogout()(dispatch)

    expect(logoutFirebase).toHaveBeenCalled()
    expect(dispatch).toHaveBeenCalledWith(clearNotesLogout())
    expect(dispatch).toHaveBeenCalledWith(logout())

  })

 })