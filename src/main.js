import Vue from 'vue';
import Vuex from 'Vuex';
import AppComponent from './App/index.vue';

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		count: 0,
		username: ''
	},
	mutations: {
		incCount(state) {
			state.count++;
		},
		decCount(state) {
			state.count--;
		},
		updateUsername(state) {
			// state.username
		}
	}
});

const vm = new Vue({
	el: '#app',
  	components: {
		app: AppComponent,
  	},
  	data: {
  		app_title: 'My Vue App'
  	},
  	computed: {
  		cnt() {
  			return store.state.count;
  		}
  	},
  	render: h => h('app')
});