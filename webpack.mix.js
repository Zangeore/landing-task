const mix = require('laravel-mix');

mix.setPublicPath('dist');
mix.vue();
mix.js('src/js/app.js', 'js');
mix.sass('src/css/app.scss', 'css');
mix.copy('src/index.html', 'dist');