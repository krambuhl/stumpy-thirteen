import Vue from 'vue';
import VueRouter from 'vue-router';
import router from './router';
import App from 'Components/App';

const getRoute = path =>
  path.indexOf('.html') !== -1
    ? path.substr(0, path.length - '.html'.length)
    : path;

export default (locals, done) => {
  const { path, layout, renderer } = locals;
  const route = '/' + getRoute(path);
  router.push(route);

  const vm = new Vue({
    router,
    render: h => h(App)
  });

  let title;
  try {
    title = router.getMatchedComponents()[0].data().pageTitle;
  } catch(e) {
    title = 'Stumptown Bear';
  }

  renderer.renderToString(vm, (err, html) => {
    if (err) done(err);
    else {
      done(
        null,
        layout
          .replace('{{title}}', title)
          .replace('{{app}}', html)
          .replace('{{route}}', route)
      );
    }
  })
};
