const webpack = require('webpack')
const path = require('path')
const RootPath = path.join(__dirname, '../')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const config = {
    entry: {
        app: path.join(RootPath, './src/main.ts')
    },
    resolve: {
        extensions: ['.ts', '.js', '.vue', '.json'],
        alias: {
            vue$: 'vue/dist/vue.esm.js'
        }
    },
    module: {
        strictExportPresence: true,
        rules: [
            {
                test: /\.html$/,
                use: {
                    loader: 'underscore-template-loader'
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.(tsx?|js)$/,
                include: RootPath,
                use: [
                    {
                        loader: 'babel-loader'
                    },
                    {
                        loader: 'ts-loader',
                        options: { appendTsxSuffixTo: [/\.vue$/] }
                    }
                ]
            },
            {
                test: /\.less$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'postcss-loader', 'less-loader']
                })
            },
            {
                test: /\.css$/,
                //exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'postcss-loader']
                })
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                            name: 'assets/img/[name].[hash:9].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                            name: 'assets/font/[name].[hash:9].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(RootPath, './public/index.html'),
            minify: {
                collapseWhitespace: true //折叠空白区域 也就是压缩代码
            },
            // favicon: path.join(__dirname, "../public/favicon.ico"),
            hash: false
        }),
        new ExtractTextPlugin('assets/css/[name]_[chunkhash:9].css')
    ]
}
module.exports = config
