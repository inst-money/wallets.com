// const merge = require('webpack-merge');

module.exports = {
  publicPath: '/',
  lintOnSave: true,

  pluginOptions: {
    i18n: {
      locale: 'zh',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false
    }
  },
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            'primary-color': '#0045ff',
            'link-color': '#0045ff'
          },
          javascriptEnabled: true
        }
      }
    }
  },

  chainWebpack: (config) => {
    config.module
      .rule('images')
      .use('url-loader')
      .loader('url-loader')
      .options('limit', 500000)
      .end()
    config.module.rule('pug')
      .test(/\.pug$/)
      .use('pug-html-loader')
      .loader('pug-html-loader')
      .end()
  }
}
