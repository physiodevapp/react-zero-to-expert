import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(FirebaseAuth, googleProvider);

    // const credentials = GoogleAuthProvider.credentialFromResult(result)
    // console.log({credentials})

    const { displayName, email, photoURL, uid } = result.user;

    return {
      ok: true,
      // User info
      displayName,
      email,
      photoURL,
      uid,
    };
  } catch (error) {
    // console.log({error})
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;

    return {
      ok: false,
      errorCode,
      errorMessage,
    };
  }
};

export const registerUserWithEmailPassword = async ({
  email,
  password,
  displayName,
}) => {
  try {
    const result = await createUserWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    );
    const { uid, photoURL } = result.user;
    await updateProfile(FirebaseAuth.currentUser, { displayName })
    return {
      ok: true,
      // User info
      photoURL,
      uid,
    };
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    // console.log({ error });
    return {
      ok: false,
      errorCode,
      errorMessage,
    };
  }
};
export const loginWithEmailPassword = async ({email, password}) => {
  
  try {
    const resp = await signInWithEmailAndPassword(FirebaseAuth, email, password)

    const { displayName } = resp.user

    return  {
      ok: true,
      displayName,
      email,
    }
    
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;

    return {
      ok: false,
      errorCode,
      errorMessage
    }
  }

}

export const logoutFirebase = async() => {
  return await FirebaseAuth.signOut()
}
