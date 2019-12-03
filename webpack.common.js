const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: "./src/index.js",
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    "style-loader", 
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.html$/,
                use: ["html-loader"]
            },
            {
                test: /\.(jpg|jpeg|png|svg|gif)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        esModule: false,
                        name: "[name].[hash].[ext]",
                        outputPath: "images"
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/template.html",
            output: "index.html"
        }),
        new CleanWebpackPlugin()
    ]
};