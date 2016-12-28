import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  notes: [],
  activeNote: {
    text: '',
    favorite: false
  }
}

const mutations = {
  ADD_NOTE (state) {
    const newNote = {
      text: 'New note #' + (state.notes.length + 1),
      favorite: false
    }

    state.notes.push(newNote)
    state.activeNote = newNote
  },

  EDIT_NOTE (state, text) {
    state.activeNote.text = text
  },

  DELETE_NOTE (state) {
    state.notes.splice(state.notes.indexOf(state.activeNote), 1)
    state.activeNote = state.notes[0]
  },

  TOGGLE_FAVORITE (state) {
    state.activeNote.favorite = !state.activeNote.favorite
  },

  SET_ACTIVE_NOTE (state, note) {
    state.activeNote = note
  }
}

const getters = {
  notes: state => state.notes,
  activeNote: state => state.activeNote
}

export const store = new Vuex.Store({
  state,
  mutations,
  getters
})