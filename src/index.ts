import Vue from 'vue';
import Buefy from 'buefy';
import router from './router/index';
import App from './App.vue';
import './sass/bulma.custom.scss';

Vue.use(Buefy, {
	defaultNoticeQueue: false
});

new Vue({
	el: '#app',
	router,
	template: '<App />',
	components: { App }
});
