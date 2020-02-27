module.exports = {
  outputDir: '../public/pwa',
  publicPath: '/pwa',

  devServer: {
    proxy: 'http://localhost:8002'
  },

  pwa: {
    name: 'Catane',
    themeColor: '#a02e2d',
    msTileColor: '#fbac36',
    manifestOptions: {
      background_color: '#a02e2d'
    },
    iconPaths: {
      favicon32: 'img/icons/favicon-32x32.png',
      favicon16: 'img/icons/favicon-16x16.png',
      appleTouchIcon: 'img/icons/apple-touch-icon.png',
      maskIcon: 'img/icons/safari-pinned-tab.svg',
      msTileImage: 'img/icons/msapplication-icon-144x144.png'
    }
  }
}
