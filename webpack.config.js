const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')


module.exports = {
    mode: 'development',
    entry: {
        'main': path.resolve(__dirname, './src/js/index.js'),
        'greeting': path.resolve(__dirname, './src/js/greeting.js'),
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
    },
    devServer: {
        historyApiFallback: true,
        static: {
            directory: path.join(__dirname, './dist'),
          },
        open: true,
        compress: true,
        port: 8080,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/html/index.html'),
            filename: 'index.html',
            chunks: ['main']
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/html/greeting.html'),
            filename: 'greeting.html',
            chunks: ['greeting']
        }),
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.(scss|css)$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(jpg|png|svg|jpeg|gif)$/,
                type: 'asset/resource'
            }
        ],
    },
}