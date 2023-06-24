import { deleteDoc, doc } from "firebase/firestore/lite"
import { FirebaseDB } from "../firebase/config"

export const deleteNote = async(uid, noteId) => {
  
  const docRef = doc(FirebaseDB, `${uid}/journal/notes/${noteId}`);

  await deleteDoc(docRef)

}