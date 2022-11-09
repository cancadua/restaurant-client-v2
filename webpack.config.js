const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require("webpack");
const htmlPlugin = new HtmlWebPackPlugin({
    template: "./public/index.html",
    filename: "./index.html"
});

module.exports = {
    mode: "development",
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }, {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }, {
                test: /\.svg$/,
                use: [{
                        loader: "babel-loader"
                    }, {
                        loader: "react-svg-loader",
                        options: {
                            jsx: true // true outputs JSX tags
                        }
                    }
                ]
            }
        ]
    },
    devServer: {
        port: process.env.PORT || 3000,
        historyApiFallback: true,
        open: true,
        hot: true,
        compress: true,
        static: {
            directory: path.join(__dirname, 'public'),
            watch: {
                ignored: /node_modules/,
            },
        },
    },
    plugins: [
        new webpack.ProvidePlugin({
            "React": "react",
        }), htmlPlugin]
};