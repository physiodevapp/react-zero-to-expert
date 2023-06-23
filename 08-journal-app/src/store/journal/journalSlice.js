
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isSaving: true,
  messageSaved: '',
  noes: [],
  active: null,
  // active: {
  //   id: '123',
  //   title: '',
  //   body: 1234567,
  //   imageUrls: [], // htpps://foto1.jpg, htpps://foto2.jpg, 
  // }
}

export const journalSlice = createSlice({
  name: 'journal',
  initialState,
  reducers: {
    addNewEmptyNote: (state, action) => {
      state.isSaving
    },
    setActiveNote: (state, action) => {

    },
    setNotes: (state, action) => {

    },
    setSaving: (state) => {

    },
    updateNote: (state, note) => {

    },
    deleteNoteById: (state, action) => {

    },
  },
})

export const { 
  addNewEmptyNote,
  setActiveNote,
  setNotes,
  setSaving,
  updateNote,
  deleteNoteById,
} = journalSlice.actions