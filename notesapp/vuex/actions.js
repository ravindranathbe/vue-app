import Vuex from 'vuex'
import { store } from './store'

export const addNote = () => {
  store.commit('ADD_NOTE')
}

export const editNote = (e) => {
  store.commit('EDIT_NOTE', e.target.value)
}

export const deleteNote = () => {
  store.commit('DELETE_NOTE')
}

export const updateActiveNote = (note) => {
  store.commit('SET_ACTIVE_NOTE', note)
}

export const toggleFavorite = () => {
  store.commit('TOGGLE_FAVORITE')
}