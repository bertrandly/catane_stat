module.exports = {
  outputDir: '../public/pwa',
  publicPath: '/pwa',
  devServer: {
    proxy: 'http://localhost:8002'
  }
}
