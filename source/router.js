import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const projects = require.context('Content/portfolio/', true, /\.vue$/);
const projectRoutes =
  projects.keys().map(key => {
    const nameKey = key.substr(0, key.length - 4).substr(2);
    return {
      path: '/portfolio/' + nameKey,
      component: projects(key)
    }
  })

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', alias: '/index', name: 'home', component: require('Content/index') },
    { path: '/open-source', alias: '/open-source/index', component: require('Content/open-source') },
    { path: '/say-hello', alias: '/say-hello/index', component: require('Content/say-hello') },
    { path: '/portfolio', alias: '/portfolio/index', component: require('Content/portfolio') },
    ...projectRoutes,
    { path: '*', component: require('Content/404') }
  ],
  linkActiveClass: 'is-active-route',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    else return { x: 0, y: 0 };
  }
});
