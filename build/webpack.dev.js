const webpack = require("webpack");
const path = require("path");
const RootPath = path.join(__dirname, "../");

const config = {
  output: {
    path: path.join(RootPath, "./dist"),
    filename: "[name].js"
  }
};
module.exports = config;
