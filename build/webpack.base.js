const webpack = require("webpack");
const path = require("path");
const RootPath = path.join(__dirname, "../");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

const config = {
    entry: {
        app: path.join(RootPath, "./src/main.ts")
    },
    resolve: {
        extensions: [".ts", ".js", ".vue", ".json"],
        alias: {
            vue$: "vue/dist/vue.esm.js"
        }
    },
    module: {
        strictExportPresence: true,
        rules: [
            {
                test: /\.html$/,
                use: {
                    loader: "underscore-template-loader"
                }
            },
            {
                test: /\.vue$/,
                loader: "vue-loader",
                options: {
                    loaders: {
                        less:
                            "vue-style-loader!css-loader!less-loader!postcss-loader"
                    }
                }
            },
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                exclude: /node_modules/,
                options: {
                    transpileOnly: true,
                    appendTsSuffixTo: [/.vue$/]
                }
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 10000,
                            name: "assets/img/[name].[hash:9].[ext]"
                        }
                    }
                ]
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 10000,
                            name: "assets/font/[name].[hash:9].[ext]"
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(RootPath, "./public/index.html"),
            minify: {
                collapseWhitespace: true //折叠空白区域 也就是压缩代码
            },
            // favicon: path.join(__dirname, "../public/favicon.ico"),
            hash: false
        }),
        new ExtractTextPlugin("assets/css/[name]_[chunkhash:9].css")
    ]
};
module.exports = config;
