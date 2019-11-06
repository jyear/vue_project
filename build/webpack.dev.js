const webpack = require("webpack");
const path = require("path");
const RootPath = path.join(__dirname, "../");

const getIP = function() {
    var interfaces = require("os").networkInterfaces();
    for (var devName in interfaces) {
        var iface = interfaces[devName];
        for (var i = 0; i < iface.length; i++) {
            var alias = iface[i];
            if (
                alias.family === "IPv4" &&
                alias.address !== "127.0.0.1" &&
                !alias.internal
            ) {
                return alias.address;
            }
        }
    }
};

const config = {
    mode: "development",
    output: {
        path: path.join(RootPath, "./dist"),
        filename: "[name].js"
    },
    devtool: "cheap-module-eval-source-map",
    devServer: {
        historyApiFallback: false,
        open: true,
        inline: true,
        hot: true,
        contentBase: path.join(RootPath, "./dist"),
        port: 8081,
        host: getIP()
    },
    plugins: [new webpack.HotModuleReplacementPlugin()]
};
module.exports = config;
