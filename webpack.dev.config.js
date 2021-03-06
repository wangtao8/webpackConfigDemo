const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname,
        filename: './release/bundle.js'
    },

    module: {
        rules: [{
            test: /\.js?$/,
            exclude: /{node_modules}/,
            loader: 'babel-loader'
        }]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html' // 空模版
        })
    ],

    devServer: {
        contentBase: path.join(__dirname, './release'), // 从哪里获取js
        open: true, // 是否自动打开浏览器
        port: 9000,
        proxy: { // 代理
            '/api/*': {
                target: 'http://localhost:8880'
            }
        }
    }
}