const { merge } = require("webpack-merge"); // merge is a function that is used to merge two different config objects.
const commonConfig = require("./webpack.common");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const packageJson = require('../package.json');

const domain = process.env.PRODUCTION_DOMAIN;
const prodConfig = {
  mode: "production",
  output : {
    filename:'[name].[contenthash].js'
  },
  plugins: [ // Corrected: "plugins" instead of "plugin"
    new ModuleFederationPlugin({
      name:'Container',
      remotes:{
        //marketing word here will match with the name given in remote 
        marketing:`marketing@${domain}/marketing/remoteEntry.js`
      },
      shared:packageJson.dependencies
    }),

  ],
};

module.exports = merge(commonConfig, prodConfig);
