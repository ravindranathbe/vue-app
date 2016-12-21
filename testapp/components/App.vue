<template>
<div>
  <p>{{ count }}</p>
  <p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </p>
</div>
</template>

<script>
import Vue from 'vue';
import { store } from '../vuex/store';

export default {
	data() {
		return {
			count: 0
		}
	},
	methods: {
		increment() {
			store.commit('increment')
		},
		decrement() {
			store.commit('decrement')
		}
	},
	computed: {
		count() {
			return store.state.count;
		}
	}
} 
</script>

<style>
body { background-color: white; color: green;}
</style>