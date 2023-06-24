import { onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../store/auth";
import { FirebaseAuth } from "../firebase/config";
import { useEffect } from "react";
import { startLoadingNotes } from "../store/journal/thunks";

export const useCheckAuth = () => {

  const { status } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  
  useEffect(() => {
    onAuthStateChanged(FirebaseAuth, async (user) => {
      if (!user) {
        return dispatch(logout());
      } else {
        const { uid, email, displayName, photoURL } = user;
        dispatch(login({ uid, email, displayName, photoURL }));
        dispatch(startLoadingNotes())
      }
    });
  }, []);
  
  return {
    status
  }
  
}

