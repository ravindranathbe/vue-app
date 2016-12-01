import bus from '../bus';

export default {
  	name: 'GithubInput',
  	data() {
    	return {
    		app_title: 'Github Input App',
    		username: ''
    	}
  	},
  	methods: {
  		onSubmit(event) {
    		if (this.username && this.username !== '') {
    			console.log(this.username);
    			bus.$emit('new-username', this.username);
    		}
  		}
  	}
}