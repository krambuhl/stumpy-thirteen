import Vue from 'vue';
import cssReset from 'reset-css/reset.css';

const context = require.context('./content/', true, /\.js$/);

const getRoute = path =>
  path.indexOf('.html') !== -1
    ? path.substr(0, path.length - '.html'.length)
    : path;

const getModule = path => {
  return context('./' + getRoute(path) + '.js').default;
}

export default (locals, done) => {
  const { path, layout, renderer } = locals;
  const route = getRoute(path);
  const module = getModule(path);
  const data = Object.assign({}, module.data, locals);
  const vm = new Vue({
    data,
    render: module.template.render,
    staticRenderFns: module.template.staticRenderFns
  });

  renderer.renderToString(vm, (err, html) => {
    if (err) done(err);
    else {
      done(
        null,
        layout
          .replace('{{title}}', `${data.pageTitle}`)
          .replace('{{app}}', `${html}`)
          .replace('{{route}}', `${route}`)
      );
    }
  })
};
