const paths = {
  build: `${__dirname}/fractal/www`,
  src: `${__dirname}/fractal/src`,
  static: `${__dirname}/fractal/tmp`,
  style: `${__dirname}`,
};

/* Fractalのインスタンスの作成とエクスポート */
const fractal = module.exports = require('@frctl/fractal').create();
const mandelbrot = require('@frctl/mandelbrot')({
 favicon: '/assets/icons/icon.ico',
 lang: 'ja',
 styles: ['default', '/assets/styles/theme.css'],
 static: {
  mount: 'fractal',
 },
});

/* プロジェクト・タイトルの設定 */
fractal.set('project.title', 'mkasumi.com コンポーネントライブラリ');

/* componentsディレクトリの指定 */
fractal.components.set('path', `${paths.src}/components`);

/* documentationディレクトリの指定 */
fractal.docs.engine('@frctl/nunjucks');
fractal.docs.set('path', `${paths.src}/docs`);

/* Specify a directory of static assets */
fractal.web.set('static.path', paths.static); // ここの値を要調整

// Web UI config
fractal.web.theme(mandelbrot);
fractal.web.set('builder.dest', paths.build);