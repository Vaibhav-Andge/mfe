const { merge } = require("webpack-merge"); // merge is a function that is used to merge two different config objects.
const HtmlWebpackPlugin = require("html-webpack-plugin");
const commonConfig = require("./webpack.common");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const packageJson = require('../package.json');
const devConfig = {
  mode: "development",
  devServer: {
    port: "8080",
    historyApiFallback: {
      index: "index.html",
    },
  },
  plugins: [ // Corrected: "plugins" instead of "plugin"
    new ModuleFederationPlugin({
      name:'Container',
      remotes:{
        //marketing word here will match with the name given in remote 
        marketing:'marketing@http://localhost:8081/remoteEntry.js'
      },
      shared:packageJson.dependencies
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html", // Fixed template path (dot before "src" removed)
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
