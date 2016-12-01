import Vue from 'vue';
import AppComponent from './App/index.vue';

const vm = new Vue({
	el: '#app',
  	components: {
		app: AppComponent,
  	},
  	data: {
  		app_title: 'My Vue App'
  	},
  	render: h => h('app')
});