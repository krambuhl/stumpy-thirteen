import Vue from 'vue';
import VueRouter from 'vue-router';

// order matters yo
import 'reset-css/reset.css';
import App from 'Components/App';
import router from './router';

const __svg__ = { path: './assets/svg/**/*.svg', name: '/assets/svgs/iconset.svg' };
require('webpack-svgstore-plugin/src/helpers/svgxhr')(__svg__);

Vue.use(VueRouter)

router.afterEach((to, routeFrom) => {
  const toMeta = to.meta;

  if (toMeta.pageTitle) {
    document.title = toMeta.pageTitle;

    ga('set', {
      page: to.path,
      title: toMeta.pageTitle
    });
    ga('send', 'pageview');
  }

  if (routeFrom) {
    const fromMeta = routeFrom.meta;
    if (fromMeta.bodyClass) fromMeta.bodyClass.split(' ').forEach(cls => document.body.classList.remove(cls))
  }

  if (toMeta.bodyClass) toMeta.bodyClass.split(' ').forEach(cls => document.body.classList.add(cls))
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
