import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSaving: false,
  messageSaved: "",
  notes: [],
  active: null,
  // active: {
  //   id: '123',
  //   title: '',
  //   body: 1234567,
  //   imageUrls: [], // htpps://foto1.jpg, htpps://foto2.jpg,
  // }
};

export const journalSlice = createSlice({
  name: "journal",
  initialState,
  reducers: {
    savingNewNote: (state) => {
      state.isSaving = true;
    },
    addNewEmptyNote: (state, action) => {
      state.notes.push(action.payload);
      state.isSaving = false;
    },
    setActiveNote: (state, { payload }) => {
      state.active = payload;
      state.messageSaved = ''
    },
    setNotes: (state, { payload }) => {
      state.notes = payload.notes;
    },
    setSaving: (state) => {
      state.isSaving = true;
      state.messageSaved = ''
    },
    updateNote: (state, { payload }) => {
      state.isSaving = false;
      state.notes = state.notes.map((note) => {
        if (note.id === payload.note.id) {
          note = payload.note;
        }

        return note;
      });

      state.messageSaved = `"${payload.note.title}" was updated successfully!`
    },
    setPhotostoActiveNote: (state, action)  => {
      state.active.imageUrls = [ ...state.active.imageUrls, ...action.payload ]
      state.isSaving = false
    },
    deleteNoteById: (state, action) => {},
  },
});

export const {
  savingNewNote,
  addNewEmptyNote,
  setActiveNote,
  setNotes,
  setSaving,
  updateNote,
  setPhotostoActiveNote,
  deleteNoteById,
} = journalSlice.actions;
