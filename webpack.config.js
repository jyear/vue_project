const webpackBase = require("./build/webpack.base.js");
const webpackDev = require("./build/webpack.dev.js");
const webpackMerge = require("webpack-merge");
let config = {};
if (process.env.NODE_ENV == "development") {
  config = webpackMerge(webpackBase, webpackDev);
}
console.log(config);
module.exports = config;
