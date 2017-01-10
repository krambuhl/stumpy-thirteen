import Vue from 'vue';
import cssReset from 'reset-css/reset.css';

const content = require.context('./content/', true, /\.vue$/);

// converts location.href to route
const normalizeRoute = route => {
  switch (route) {
    case '': return 'index';
    case 'portfolio': return 'portfolio/index';
    case 'open-source': return 'open-source/index';
    default: return route;
  }
}

const module = content('./' + normalizeRoute(global.initialRoute) + '.vue');
const data = module.data();
const vm = new Vue({
  el: '#app',
  render: h => h(module)
});

document.title = data.pageTitle
