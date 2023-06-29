import { collection, deleteDoc, getDocs } from "firebase/firestore/lite"
import { addNewEmptyNote, savingNewNote, setActiveNote, startNewNote } from "../../../src/store/journal"
import { FirebaseDB } from "../../../src/firebase/config"

describe('testing journal thunks', () => { 
  const dispatch = jest.fn()
  const getState = jest.fn()
  
  beforeEach(() => jest.clearAllMocks())

  test('should startNewNote create blank note', async() => { 
    const uid = "TEST-UID"
    getState.mockReturnValue({auth:{uid}})

    await startNewNote()(dispatch, getState)

    expect(dispatch).toHaveBeenCalledWith(savingNewNote())
    expect(dispatch).toHaveBeenCalledWith(addNewEmptyNote({
      title: "",
      body: "",
      id: expect.any(String),
      date: expect.any(Number),
    }));
    expect(dispatch).toHaveBeenCalledWith(setActiveNote({
      title: "",
      body: "",
      id: expect.any(String),
      date: expect.any(Number),
    }))

    // Delete notes after testing
    const collectionRef = collection(FirebaseDB, `${uid}/journal/notes`)
    const docs = await getDocs(collectionRef)
    const deletePromises = []
    docs.forEach(doc => deletePromises.push(deleteDoc(doc.ref)));
    await Promise.all(deletePromises)

  })
})