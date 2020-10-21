const mix = require('laravel-mix');

mix.js('src/js/app.js', 'public/js').sourceMaps();
mix.sass('src/scss/app.scss', 'public/css').options({
    processCssUrls: false
});
mix.setPublicPath('public');

mix.copy('src/images', 'public/images');