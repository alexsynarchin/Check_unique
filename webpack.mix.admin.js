const mix = require('laravel-mix');
const config = require('./webpack.config');
let distPath = 'public/assets/admin';
const SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin');

require('laravel-mix-listen');
function resolve(dir) {
    return path.join(
        __dirname,
        '/resources/admin/js',
        dir
    );
}


mix.listen('configReady', webpackConfig => {
    // Add "svg" to image loader test
    const imageLoaderConfig = webpackConfig.module.rules.find(
        rule =>
            String(rule.test) ===
            String(/(\.(png|jpe?g|gif|webp)$|^((?!font).)*\.svg$)/)
    );
    console.log(imageLoaderConfig);
    //imageLoaderConfig.exclude = resolve('icons');
});
mix.webpackConfig(config);
mix

    .js('resources/admin/js/app.js', 'js')
    .extract([
        'vue',
        'axios',
        'vuex',
        'vue-router',
        'vue-i18n',
        'element-ui',
        'echarts',
        'highlight.js',
        'sortablejs',
        'dropzone',
        'xlsx',
        'tui-editor',
        'codemirror',
    ])
    .vue({ version: 2 })
    .options({
        processCssUrls: false,
        processJsUrls:false
    })
    .sourceMaps()
    .setPublicPath(distPath)
    .setResourceRoot("/assets/admin/")
    .version();
