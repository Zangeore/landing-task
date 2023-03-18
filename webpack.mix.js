const mix = require('laravel-mix');
const httpServer = require('http-server');
const path = require('path');
require('laravel-mix-purgecss');
require('laravel-mix-eslint');
const textCollector = require('./src/textCollector');
mix.setPublicPath('dist');

textCollector.init();
mix.version();
mix.disableNotifications();
mix.vue({
  extractStyles: true,
  globalStyles: 'src/scss/global_atomic.scss',
});
mix.eslint({
  files: [
    'src/js/**/*',
  ],
  exclude: [
    'src/js/langs/*',
  ],
  fix: true,
});


mix.js('src/js/app.js', 'js');
mix.sass('src/scss/app.scss', 'css');
mix.copy('src/index.html', 'dist');
mix.copy('src/images/*', 'dist/images');
mix.purgeCss({
  enabled: true,
  content: ['src/**/*.html', 'src/**/*.vue', 'src/**/*.js'],
  css: ['dist/css/app.css'],
});

mix.alias({
  // eslint-disable-next-line no-undef
  styles: path.resolve(__dirname, 'src/scss/'),
});


const server = httpServer.createServer({
  root: 'dist',
  cache: -1,
  showDir: true,
  autoIndex: true,
  ext: 'html',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': 'true',
  },
});
server.listen(8080);
console.log('Server running on port 8080');

if (!mix.inProduction()) {
  mix.browserSync({
    proxy: 'http://localhost:8080',
    files: [
      'dist/**/*.{html,htm,css,js}',
    ],
    open: false,
    notify: false,
    reloadOnRestart: true,
    reloadDelay: 1000,
    reloadDebounce: 1000,
  });
}
