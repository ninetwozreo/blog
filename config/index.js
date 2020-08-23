'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

function proxyTableFactory(contextPath, serviceName) {
  const api = '/api'

  console.log('proxyTableFactory: ============>', {
    [contextPath + '/']: `${api}/`,
  })

  return {
    changeOrigin: true,

    // /api/admin => ''
    pathRewrite: {[api + serviceName]: ''},

    // /framework/ => /api/
    cookiePathRewrite: {
      [contextPath + '/']: `${api}/`,
    },
  }
}

module.exports = {
  dev: {

    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    // assetsPublicPath: './',//nginx
    proxyTable: {

      // '/api': {
      //   s
      // }
      // '/': {
      '/bs': {
        target: 'http://129.28.203.109:8802/userServer',
        // target: 'http://localhost:8802/userServer',
        // target: 'http://127.0.0.1:8803/',
        changeOrigin:true,//是否跨域
        // ...proxyTableFactory('/bs', '/blog'),//待修改
        pathRewrite: {      //需要rewrite重写的, 如果在服务器端做了处理则可以不要这段
          '^/bs': '/'
          // '^/bs': '/blog'
        }
      },
      '/first': {
        // target: 'http://localhost:8085/framework',
        // target: 'http://192.168.134.7:11000/framework',
        // target: 'http://192.168.134.7:11000/framework',
        target: 'http://localhost:8802/userServer',
        changeOrigin:true,//是否跨域
        ...proxyTableFactory('/userServer', '/first'),//待修改

      },
    },
      // Various Dev Server settings
      host: 'localhost', // can be overwritten by process.env.HOST
      port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
      autoOpenBrowser: false,
      errorOverlay: true,
      notifyOnErrors: true,
      poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

      // Use Eslint Loader?
      // If true, your code will be linted during bundling and
      // linting errors and warnings will be shown in the console.
      useEslint: true,
      // If true, eslint errors and warnings will also be shown in the error overlay
      // in the browser.
      showEslintErrorsInOverlay: false,

      /**
       * Source Maps
       */

      // https://webpack.js.org/configuration/devtool/#development
      devtool: 'cheap-module-eval-source-map',

      // If you have problems debugging vue-files in devtools,
      // set this to false - it *may* help
      // https://vue-loader.vuejs.org/en/options.html#cachebusting
      cacheBusting: true,

      cssSourceMap: true
    },

    build: {
      // Template for index.html
      index: path.resolve(__dirname, '../dist/index.html'),

      // Paths
      assetsRoot: path.resolve(__dirname, '../dist'),
      assetsSubDirectory: 'static',
      // assetsPublicPath: '/',//
      assetsPublicPath: './',//nginx

      /**
       * Source Maps
       */

      productionSourceMap: false,
      // https://webpack.js.org/configuration/devtool/#production
      devtool: '#source-map',

      // Gzip off by default as many popular static hosts such as
      // Surge or Netlify already gzip all static assets for you.
      // Before setting to `true`, make sure to:
      // npm install --save-dev compression-webpack-plugin
      productionGzip: false,
      productionGzipExtensions: ['js', 'css'],

      // Run the build command with an extra argument to
      // View the bundle analyzer report after build finishes:
      // `npm run build --report`
      // Set to `true` or `false` to always turn it on or off
      bundleAnalyzerReport: process.env.npm_config_report
    }
  }
