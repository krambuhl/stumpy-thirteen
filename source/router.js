import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const projects = require.context('Content/portfolio/', true, /\.vue$/);
const projectRoutes =
  projects.keys().map(key => {
    const nameKey = key.substr(0, key.length - 4).substr(2);
    return {
      path: '/portfolio/' + nameKey,
      component: projects(key),
      meta: projects(key).meta
    }
  })

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'home', component: require('Content/index'), meta: require('Content/index').meta },
    { path: '/open-source', alias: '/open-source/index', component: require('Content/open-source'), meta: require('Content/open-source').meta },
    { path: '/say-hello', alias: '/say-hello/index', component: require('Content/say-hello'), meta: require('Content/say-hello').meta },
    { path: '/portfolio', alias: '/portfolio/index', component: require('Content/portfolio'), meta: require('Content/portfolio').meta },
    ...projectRoutes,
    { path: '*', component: require('Content/404'), meta: require('Content/404').meta }
  ],
  linkActiveClass: 'is-active-route',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    else return { x: 0, y: 0 };
  }
});
