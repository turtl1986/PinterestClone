const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
const CopyWebpackPlugin=require('copy-webpack-plugin')

const path = require('path')

module.exports = {
  
  context: path.resolve(__dirname, 'src/scripts'),
  
  entry: './index.js',
 
  output: {
   
    filename: '[name].[contenthash].js',
    
    path: path.resolve(__dirname, 'build'),
   
    clean: true
  },
  
  devServer: {
    port: 8080,
    hot: true,
    open: true
  },
  
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin(), new TerserPlugin()]
  },
  
  plugins: [
   
    new HtmlWebpackPlugin({
      
      template: path.resolve(__dirname, 'src/public/index.html')
    }),
    
    new MiniCssExtractPlugin(
      {
      
        filename: '[name].[contenthash].css',
    
      }
    ),
    new ESLintPlugin(true),
    new CopyWebpackPlugin({
      patterns: [
        { from: path.resolve(__dirname, 'src/assets'), to: (__dirname, 'assets') },
        
      ],
    })
  ],
  
  module: {
    rules: [
      
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [ 
          MiniCssExtractPlugin.loader,
        // Translates CSS into CommonJS
        "css-loader",
        // Compiles Sass to CSS
        "sass-loader",],
      },
      {
        test: /\.(jpe?g|png|webp|gif|svg)$/i,
  use: [{
    loader: 'file-loader',
    options:{
      name: '[path][name].[ext]'
    }
  }],
      },
      
    ]
  }
}