const webpack = require("webpack");
const path = require("path");
const RootPath = path.join(__dirname, "../");

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
            less: "vue-style-loader!css-loader!less-loader!postcss-loader"
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
  }
};
module.exports = config;
