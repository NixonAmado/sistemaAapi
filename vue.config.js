const { defineConfig } = require('@vue/cli-service')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/sistemaAapi/',
  configureWebpack: {
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'styles.[contenthash].css'
      })
    ]
  }

})
