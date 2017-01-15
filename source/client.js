import Vue from 'vue';
import VueRouter from 'vue-router';
import router from './router';
import App from 'Components/App';

Vue.use(VueRouter)

const vm = new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
