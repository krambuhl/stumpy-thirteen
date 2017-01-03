import Vue from 'vue';

const tagContext = require.context('./tags/', true, /\.vue$/);
const templateContext = require.context('./templates/', true, /\.vue$/);
const context = require.context('./content/', true, /\.js$/);
const getModule = path => {
  if (path.indexOf('.html') !== -1) {
    path = path.substr(0, path.length - '.html'.length);
  }

  return context('./' + path + '.js').default;
}

export default (locals, done) => {
  const { path, layout, renderer } = locals;
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
          .replace('<title>{{$title}}</title>', `<title>${data.pageTitle}</title>`)
          .replace('<div id="app">{{$app}}</div>', `<div id="app">${html}</div>`)
      );
    }
  })
};
