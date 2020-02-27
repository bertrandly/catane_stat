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
    }
  }
}
