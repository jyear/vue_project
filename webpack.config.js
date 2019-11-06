const webpackBase = require("./build/webpack.base.js");
const webpackDev = require("./build/webpack.dev.js");
const webpackPro = require("./build/webpack.pro.js");
const webpackMerge = require("webpack-merge");
let config = {};
if (process.env.NODE_ENV == "development") {
    config = webpackMerge(webpackBase, webpackDev);
}
if (process.env.NODE_ENV == "production") {
    config = webpackMerge(webpackBase, webpackPro);
}
module.exports = config;
