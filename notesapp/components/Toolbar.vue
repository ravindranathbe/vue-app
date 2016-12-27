<template>
  <div id="toolbar">
    <i @click="addNote" class="glyphicon glyphicon-plus"></i>
    <i @click="toggleFavorite"
      class="glyphicon glyphicon-star"
      :class="{starred: activeNote().favorite}"></i>
    <i @click="deleteNote" class="glyphicon glyphicon-remove"></i>
  </div>
</template>

<script>
import { addNote, deleteNote, toggleFavorite } from '../vuex/actions'
import { store } from '../vuex/store'

export default {
  data () {
    return {
      activeNote: state => store.state.activeNote
    }
  },
  methods: {
    addNote,
    deleteNote,
    toggleFavorite
  }
}
</script>