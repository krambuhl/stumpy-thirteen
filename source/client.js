import Vue from 'vue';
import VueRouter from 'vue-router';

// order matters yo
import cssReset from 'reset-css/reset.css';
import App from 'Components/App';
import router from './router';

const __svg__ = { path: './tags/assets/**/*.svg', name: '/assets/svgs/iconset.svg' };
require('webpack-svgstore-plugin/src/helpers/svgxhr')(__svg__);

Vue.use(VueRouter)

router.afterEach((to, routeFrom, done) => {
  const toMeta = to.matched[0].components.default.meta;

  if (toMeta.pageTitle) document.title = toMeta.pageTitle;

  if (routeFrom && routeFrom.matched[0]) {
    const fromMeta = routeFrom.matched[0].components.default.meta;
    if (fromMeta.bodyClass) fromMeta.bodyClass.split(' ').forEach(cls => document.body.classList.remove(cls))
  }

  if (toMeta.bodyClass) toMeta.bodyClass.split(' ').forEach(cls => document.body.classList.add(cls))
})

const vm = new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
