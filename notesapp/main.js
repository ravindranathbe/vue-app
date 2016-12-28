import Vue from 'vue';
import App from './components/App.vue';
import { store } from './vuex/store'

Vue.use(require('vue-resource'));

var notesapp = new Vue({
  	el: '#app',
  	components: { App },
  	mounted: function() {
  		this.getNotes()
  	},
  	methods: {
  		getNotes() {
  			this.$http.get('notesBackend/public/notes').then((response) => {
	        store.state.notes = JSON.parse(response.body)
	      }, (response) => {
        	console.log(response);
      	});
  		}
  	}
})

window.notesapp = notesapp;