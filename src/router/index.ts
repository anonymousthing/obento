import Vue from 'vue';
import Router from 'vue-router';

import HomePage from '../components/pages/HomePage.vue';

Vue.use(Router);

export default new Router({
	mode: 'history',
	routes: [
		{ path: '/', component: HomePage }
	]
});
