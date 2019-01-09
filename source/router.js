import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const projects = require.context('Pages/portfolio/', true, /\.vue$/);
const projectRoutes =
  projects.keys().map(key => {
    const nameKey = key.substr(0, key.length - 4).substr(2);
    return {
      path: `/${nameKey}`,
      component: projects(key),
      meta: projects(key).meta
    }
  })

console.log(projectRoutes)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'home', component: require('Pages/index'), meta: require('Pages/index').meta },
    ...projectRoutes,
    { path: '*', component: require('Pages/404'), meta: require('Pages/404').meta }
  ],
  linkActiveClass: 'is-active-route',
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
			return { selector: to.hash };
		} else if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  }
});
