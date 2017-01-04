import Vue from 'vue';
import cssReset from 'reset-css/reset.css';

const content = require.context('./content/', true, /\.js$/);

const normalizeRoute = route => {
  switch (route) {
    case '': return 'index';
    case 'portfolio': return 'portfolio/index';
    case 'open-source': return 'open-source/index';
    default: return route;
  }
}

const module = content('./' + normalizeRoute(global.initialRoute) + '.js').default;
const data = Object.assign({}, module.data);

const vm = new Vue({
  el: '#app',
  data,
  render: module.template.render,
  staticRenderFns: module.template.staticRenderFns
});
