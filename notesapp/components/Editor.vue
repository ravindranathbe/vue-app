<template>
  <div id="note-editor">
    <textarea
      :value="activeNote().text"
      @input="editNote"
      class="form-control">
    </textarea>
  </div>
</template>

<script>
import { editNote } from '../vuex/actions'
import { store } from '../vuex/store'

export default {
  data () {
    return {
      activeNote: state => store.state.activeNote
    }
  },
  methods: {
    editNote
  }
}
</script>
