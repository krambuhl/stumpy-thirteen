import Vue from 'vue';
import Router from 'vue-router';
import cssReset from 'reset-css/reset.css';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/index', alias: '/', component: require('Content/index') },
    { path: '/open-source', alias: '/open-source/index', component: require('Content/open-source/index') },
    { path: '/say-hello', alias: '/say-hello/index', component: require('Content/say-hello/index') },
    { path: '/portfolio', alias: '/portfolio/index', component: require('Content/portfolio/index') },
    { path: '/portfolio/:projectId', component: require('Components/PortfolioProject') }
  ]
});
