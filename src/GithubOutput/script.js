import Vue from 'vue';
import bus from '../bus';
import GithubUser from '../GithubUser/index.vue'

export default {
  	name: 'GithubOutput',
    components: {
      'github-user': GithubUser,
    },
    created() {
      bus.$on('new-username', this.onUsernameChange);
    },
    destroyed() {
      bus.$off('new-username', this.onUsernameChange);
    },
  	data() {
    	return {
        currentUsername: null,
        githubData: {}
      }
  	},
    methods: {
      onUsernameChange(name) {
        this.currentUsername = name;
        this.fetchGithubData(name);
      },
      fetchGithubData(name) {
        // if we have data already, don't request again
        if (this.githubData.hasOwnProperty(name)) {
          return;
        }

        const url = `https://api.github.com/users/${name}`;
        fetch(url)
          .then(r => r.json())
          .then(data => {
            // in here we need to update the githubData object
            // this.githubData[name] = data;
            Vue.set(this.githubData, name, data);
          });
      }
    }
}