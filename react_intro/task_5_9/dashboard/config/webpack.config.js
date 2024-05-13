const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { mode, entry, plugins, devServer } = require('../../../task_5A/dashboard/config/webpack.config');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'bundle.[contenthash].js',
        clean: true,
        publicPath: '/',
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-react'],
                        },
                    },
                },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.png$/i,
                loader: 'file-loader',
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Task_5_9 Dashboard',
            template: './src/index.html',
            
        }),
        new MiniCssExtractPlugin({
        filename: "[name].[contenthash].css",
})
],
    devServer: {
        static: '../dist',
        hot: true,
        devMiddleware: {
            publicPath: '/',
            writeToDisk: true,
    },
},
};