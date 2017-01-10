import Vue from 'vue';
import cssReset from 'reset-css/reset.css';

const context = require.context('./content/', true, /\.vue$/);

const getRoute = path =>
  path.indexOf('.html') !== -1
    ? path.substr(0, path.length - '.html'.length)
    : path;

const getModule = path =>
  context('./' + getRoute(path) + '.vue');

export default (locals, done) => {
  const { path, layout, renderer } = locals;
  const route = getRoute(path);
  const module = getModule(path);
  const vm = new Vue({ render: h => h(module) });

  renderer.renderToString(vm, (err, html) => {
    if (err) done(err);
    else {
      done(
        null,
        layout
          .replace('{{title}}', `${module.data().pageTitle}`)
          .replace('{{app}}', `${html}`)
          .replace('{{route}}', `${route}`)
      );
    }
  })
};
