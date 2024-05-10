const HtmlWebpackPlugin = require("html-webpack-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports ={
    entry: "./src/index.js",
    output: {
        path: __dirname + "/dist",
        filename: "index.[contenthash].js",
        clean: true,
    },
    plugins: [new HtmlWebpackPlugin({
        title: "Swank Rulz"
    })],
};
