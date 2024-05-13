const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports ={
    entry: "./src/index.js",
    output: {
        path: __dirname + "/dist",
        filename: "index.[contenthash].js",
        clean: true,
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
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-react"],
                    },
                },
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.png$/i,
                loader: "file-loader",
            },
        ],
    },
};
