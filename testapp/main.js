import Vue from 'vue';
import App from './components/App.vue';

var testapp = new Vue({
	el: '#app',
  components: {
    app: App,
  }
});

window.testapp = testapp;