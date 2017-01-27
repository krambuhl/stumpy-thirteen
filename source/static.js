import Vue from 'vue';
import VueRouter from 'vue-router';

// order matters yo
import cssReset from 'reset-css/reset.css';
import App from 'Components/App';
import router from './router';

const getRoute = path =>
  path.indexOf('.html') !== -1
    ? path.substr(0, path.length - '.html'.length)
    : path;

export default (locals, done) => {
  const { path, layout, renderer } = locals;
  const route = '/' + getRoute(path);

  // push path from static render
  router.push(route);

  const vm = new Vue({
    router,
    render: h => h(App)
  });

  let title = 'Stumptown Bear';
  try {
    title = router.getMatchedComponents()[0].meta.pageTitle;
  } catch(e) { }

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
