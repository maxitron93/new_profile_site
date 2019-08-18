const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const webpack = require('webpack')

module.exports = (env) => {
    isProduction = env === 'production'
    console.log("Production environment:", isProduction)
    
    const config = {
        entry: ['@babel/polyfill', './src/js/app.js'],
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'js/bundle.js'
        },
        module: {
            rules: [
              {
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
              },
              {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      name: '[name].[ext]',
                      outputPath: 'img/'
                    }  
                  }
                ]
              },
              {
                test: /\.s?css$/,
                use: [
                  isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
                  {
                    loader: 'css-loader',
                    options: {
                      sourceMap: true
                    }
                  },
                  {
                    loader: 'sass-loader',
                    options: {
                      sourceMap: true
                    }              
                  }
                ]
              }
            ]
        },
        devServer: {
            contentBase: './dist',
            historyApiFallback: true
        },
        plugins: [
            new HtmlWebpackPlugin({
              filename: 'index.html',
              template: './src/index.html'
            }),
            new MiniCssExtractPlugin({
              filename: 'css/styles.css',
              chunkFilename: 'css/styles.css'
            }),
            new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/) // Don't bundle locale files in moment. Saves almost 200kB
        ],
        devtool: isProduction ? 'source-map' : 'inline-source-map'
    }

    if (isProduction) {
      config.plugins.push(new BundleAnalyzerPlugin());
    }

    return config
}
