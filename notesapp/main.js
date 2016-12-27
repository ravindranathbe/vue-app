import Vue from 'vue';
import App from './components/App.vue';

var notesapp = new Vue({
  	el: '#app',
  	components: { App }
})

window.notesapp = notesapp;